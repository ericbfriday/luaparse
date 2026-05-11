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

function convertPositionFast(node, result) {
  const loc = node.loc;
  if (loc === undefined) return;
  const start = loc.start;
  const end = loc.end;
  const range = node.range;

  if (range === undefined) {
    result.position = {
      start: { line: start.line, column: start.column + 1 },
      end: { line: end.line, column: end.column + 1 }
    };
  } else {
    result.position = {
      start: { line: start.line, column: start.column + 1, offset: range[0] },
      end: { line: end.line, column: end.column + 1, offset: range[1] }
    };
  }
}

function convertNodeFast(node) {
  const legacyType = node.type;
  const luastType = typeMap[legacyType];
  if (luastType === undefined) {
    throw new Error(`Unknown luaparse node type: ${legacyType}`);
  }

  const result = { type: luastType };

  const loc = node.loc;
  if (loc !== undefined) {
    const start = loc.start;
    const end = loc.end;
    const range = node.range;

    if (range === undefined) {
      result.position = {
        start: { line: start.line, column: start.column + 1 },
        end: { line: end.line, column: end.column + 1 }
      };
    } else {
      result.position = {
        start: { line: start.line, column: start.column + 1, offset: range[0] },
        end: { line: end.line, column: end.column + 1, offset: range[1] }
      };
    }
  }

  const fields = childFields[luastType];
  if (fields !== undefined) {
    const nodeArrayFields = arrayFields[luastType];

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      const legacyValue = node[field];

      if (legacyValue === null || legacyValue === undefined) {
        result[field] = null;
        continue;
      }

      if (nodeArrayFields?.includes(field) && Array.isArray(legacyValue)) {
        const len = legacyValue.length;
        const arr = new Array(len);
        for(let j = 0; j < len; j++) {
            arr[j] = convertNodeFast(legacyValue[j]);
        }
        result[field] = arr;
      } else if (typeof legacyValue === 'object') {
        result[field] = convertNodeFast(legacyValue);
      }
    }
  }

  // Check scalar fields explicitly to avoid iterating a Set and string matching
  if (node.operator !== undefined) result.operator = node.operator;
  if (node.name !== undefined) result.name = node.name;
  if (node.indexer !== undefined) result.indexer = node.indexer;
  if (node.raw !== undefined) result.raw = node.raw;
  if (node.value !== undefined) result.value = node.value;

  if (legacyType === 'FunctionDeclaration') {
    result.local = node.isLocal === true;
  } else if (node.local !== undefined) {
    result.local = node.local;
  }

  if (luastType === 'root' && Array.isArray(node.comments)) {
    const comments = node.comments;
    const len = comments.length;
    const outComments = new Array(len);
    for(let i = 0; i < len; i++) {
        outComments[i] = convertNodeFast(comments[i]);
    }
    result.comments = outComments;
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
