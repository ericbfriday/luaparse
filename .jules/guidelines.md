# Jules Agent Guidelines

## Before Creating a Pull Request

1. **Check for existing open PRs.** Use `gh pr list --state open` to see if the
   same fix or improvement has already been proposed. If it has, do **not**
   create a duplicate.

2. **Check if the fix is already on master.** Before proposing a change, verify
   the current state of `master` — the issue may already be resolved.

3. **One PR per logical change.** Do not submit the same change multiple times
   with slightly different branch names or descriptions. If a previous attempt
   failed, close it first before retrying.

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
