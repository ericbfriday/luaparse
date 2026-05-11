import { readFileSync } from 'fs';
import luaparse from './luaparse.mjs';
import { fromLuaparse } from './packages/luast-util-from-luaparse/dist/index.js';
import { childFields, arrayFields } from './packages/luast/dist/index.js';

const typeMap = {
  Chunk: 'root',
  LabelStatement: 'labelStatement',
  BreakStatement: 'breakStatement',
  GotoStatement: 'gotoStatement',
  ReturnStatement: 'returnStatement',
  IfStatement: 'ifStatement',
  IfClause: 'ifClause',
  ElseifClause: 'elseifClause',
  ElseClause: 'elseClause',
  WhileStatement: 'whileStatement',
  DoStatement: 'doStatement',
  RepeatStatement: 'repeatStatement',
  LocalStatement: 'localStatement',
  AssignmentStatement: 'assignmentStatement',
  CallStatement: 'callStatement',
  FunctionDeclaration: 'functionDeclaration',
  ForNumericStatement: 'forNumericStatement',
  ForGenericStatement: 'forGenericStatement',
  Identifier: 'identifier',
  StringLiteral: 'stringLiteral',
  NumericLiteral: 'numericLiteral',
  BooleanLiteral: 'booleanLiteral',
  NilLiteral: 'nilLiteral',
  VarargLiteral: 'varargLiteral',
  BinaryExpression: 'binaryExpression',
  LogicalExpression: 'logicalExpression',
  UnaryExpression: 'unaryExpression',
  MemberExpression: 'memberExpression',
  IndexExpression: 'indexExpression',
  CallExpression: 'callExpression',
  TableCallExpression: 'tableCallExpression',
  StringCallExpression: 'stringCallExpression',
  TableConstructorExpression: 'tableConstructor',
  TableKey: 'tableKey',
  TableKeyString: 'tableKeyString',
  TableValue: 'tableValue',
  Comment: 'comment'
};

const scalarFieldsArr = [
  'operator',
  'name',
  'indexer',
  'raw',
  'value',
  'local'
];

function convertPosition(node, result) {
  const loc = node.loc;
  const range = node.range;

  if (loc === undefined) return;

  const position = {
    start: {
      line: loc.start.line,
      column: loc.start.column + 1,
      ...(range === undefined ? {} : {offset: range[0]})
    },
    end: {
      line: loc.end.line,
      column: loc.end.column + 1,
      ...(range === undefined ? {} : {offset: range[1]})
    }
  };

  result.position = position;
}

function convertNodeFast(node) {
  const legacyType = node.type;
  const luastType = typeMap[legacyType];
  if (luastType === undefined) {
    throw new Error(`Unknown luaparse node type: ${legacyType}`);
  }

  const result = { type: luastType };

  convertPosition(node, result);

  const fields = childFields[luastType];
  if (fields !== undefined) {
    const nodeArrayFields = arrayFields[luastType];

    for (const field of fields) {
      const legacyValue = node[field];

      if (legacyValue === null || legacyValue === undefined) {
        result[field] = null;
        continue;
      }

      const isArray = nodeArrayFields?.includes(field);

      if (isArray && Array.isArray(legacyValue)) {
        result[field] = legacyValue.map((child) =>
          convertNodeFast(child)
        );
      } else if (!isArray && typeof legacyValue === 'object') {
        result[field] = convertNodeFast(legacyValue);
      }
    }
  }

  for (let i = 0; i < scalarFieldsArr.length; i++) {
    const key = scalarFieldsArr[i];
    if (key in node && !(key in result)) {
      result[key] = node[key];
    }
  }

  if (legacyType === 'FunctionDeclaration') {
    result.local = node.isLocal === true;
  }

  if (luastType === 'root' && Array.isArray(node.comments)) {
    result.comments = node.comments.map((c) =>
      convertNodeFast(c)
    );
  }

  return result;
}

const code = readFileSync('./benchmarks/lib/ParseLua.lua', 'utf8');
const ast = luaparse.parse(code, { locations: true, ranges: true });

const t2 = performance.now();
for(let i = 0; i < 100; i++) {
  fromLuaparse(ast);
}
const t3 = performance.now();
console.log(`Converting ORIGINAL took ${t3 - t2} milliseconds.`);

const t4 = performance.now();
for(let i = 0; i < 100; i++) {
  convertNodeFast(ast);
}
const t5 = performance.now();
console.log(`Converting FAST took ${t5 - t4} milliseconds.`);
