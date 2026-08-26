# Jules Agent Guidelines

## Before Creating a Pull Request

1. **Check for existing open PRs — with the right command.** Run
   `gh pr list --state open --limit 200`. The default page size is 30; on a
   repo that already has more than 30 open PRs, an unqualified `gh pr list`
   silently truncates and hides exactly the duplicates you're trying to avoid.
   Grep the titles/bodies for your target function or vulnerability name, not
   just an eyeball scan.

2. **Check if the fix is already on master — by grepping the code, not the
   log file.** `.jules/bolt.md` and `.jules/sentinel.md` are a narrative log,
   not a reliable index: entries get reworded slightly each run, so
   fuzzy-matching your finding against old entries is not a substitute for
   checking reality. Before writing a single line of diff:
   - `git fetch origin master && git diff origin/master -- luaparse.js` from
     your working branch's merge-base to confirm your target lines still
     look like what you think they look like.
   - Grep `luaparse.js` on current `origin/master` for the specific pattern
     you intend to replace (e.g. the function name, the vulnerable line). If
     it doesn't match your assumption, your branch is stale — rebase before
     doing anything else, not after.
   - If grepping shows the pattern is already gone, the fix is already
     applied. Close the session without a PR, and add a one-line dated note
     to the relevant `.jules/*.md` file confirming you re-checked and it was
     already fixed (so the next run doesn't repeat this same check from
     scratch).

3. **Rebase onto current `origin/master` immediately before opening the PR,
   every time — not just at branch creation.** A branch cut days ago can
   silently drop security fixes that landed on master since (this happened:
   a stale branch removed the `MAX_EXPRESSION_DEPTH` recursion guard by
   reverting to a pre-guard version of a function it was touching). Rebasing
   late and re-running the full test suite on top of current master is
   mandatory, not optional, even for "obviously small" changes.

4. **One PR per logical change.** Do not submit the same change multiple times
   with slightly different branch names or descriptions. If a previous attempt
   failed, close it first before retrying.

5. **Never bundle unrelated files.** A PR fixing one function in
   `luaparse.js` should not also touch `.changeset/`, `FUTURE-README.md`,
   `LUAST-SPEC.md`, `MIGRATION-PLAN.md`, `PORT-ANALYSIS.md`, package READMEs,
   or leave scratch/PoC scripts (e.g. `poc_*.js`, `*_test.js`) in the repo
   root. If your diff touches more than the file(s) your change is actually
   about, split it or drop the extra hunks before opening the PR.

## Agent-Specific Rules

### Sentinel (Security)

- After identifying and fixing a vulnerability, record the finding in
  `.jules/sentinel.md` and **stop**. Do not re-scan the same pattern on
  subsequent runs.
- If `.jules/sentinel.md` already documents the vulnerability you found, the
  fix is already applied. Close the session without a PR.

### Bolt (Performance)

- After applying a performance optimization, record it in `.jules/bolt.md`
  and **stop**. Do not re-optimize the same hot path on subsequent runs.
- If `.jules/bolt.md` already documents the optimization you are about to
  propose, it has already been applied. Close the session without a PR.

## General

- All PRs must pass `npm test` before submission.
- All PRs must pass `npm run format` (idempotency check) before submission.
- Do not modify `package-lock.json` unless adding/removing dependencies.
- Keep PRs small and focused. One concern per PR.
