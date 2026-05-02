# Publishing Guide

This monorepo uses [Changesets][] to manage versioning and publishing for all packages in the `packages/*` workspace.

## Packages

| Package                              | Directory                              |
| ------------------------------------ | -------------------------------------- |
| `@friday-friday/luaparse`           | root                                   |
| `@friday-friday/luast`              | `packages/luast`                       |
| `@friday-friday/luast-util-from-luaparse` | `packages/luast-util-from-luaparse` |
| `@friday-friday/luast-util-visit`   | `packages/luast-util-visit`            |
| `@friday-friday/luast-util-scope`   | `packages/luast-util-scope`            |
| `@friday-friday/unified-lua`        | `packages/unified-lua`                 |

All packages are versioned together as a **fixed** group — they always share the same version number.

## Workflow

### 1. Add a changeset (during development)

After making changes to any published package:

```sh
npm run changeset
```

This prompts you to select:
- Which packages changed
- Bump type (`patch` / `minor` / `major`)
- A changelog message

A markdown file is created under `.changeset/`. Commit it alongside your code changes.

### 2. Version bump (local or CI)

```sh
npm run version
```

This:
- Consumes all pending `.changeset/*.md` files
- Bumps `version` in the affected `package.json` files
- Updates `CHANGELOG.md` in each package (using GitHub changelog)
- Deletes the consumed changeset files

Review the resulting diff, then commit and push.

### 3. Publish (local or CI)

```sh
npm run release
```

This:
1. Builds all workspace packages (`npm run build --workspaces`)
2. Runs `changeset publish` to publish each package to npm
3. Creates git tags for each published version (e.g. `@friday-friday/luast@0.3.0`)

Push the tags:

```sh
git push --follow-tags
```

## Automated releases (CI)

The [release workflow](.github/workflows/release.yml) runs on every push to `main`:

1. Installs, builds, and tests
2. Uses `changesets/action` to:
   - If pending changesets exist → open a "Version Packages" PR that bumps versions and updates changelogs
   - If no pending changesets but the PR just merged → publish to npm and create GitHub tags

**Required secrets:**
- `NPM_TOKEN` — npm publish token (automation or granular access token)
- `GITHUB_TOKEN` — automatically provided by Actions

### First-time CI setup

1. Create an npm access token with publish permissions for the `@friday-friday` scope
2. Add it as `NPM_TOKEN` in the repository's **Settings → Secrets and variables → Actions**

## Publishing v0.3.0 manually

Since this is the first release with Changesets, you can publish directly:

```sh
# 1. Verify everything builds and tests pass
npm install --ignore-scripts
npm run build:packages
npm test
npm run test:packages

# 2. Verify versions
npx changeset status

# 3. Version (consumes the pending v0.3.0-release.md changeset)
npm run version

# 4. Review the version bumps and changelogs
git diff

# 5. Publish to npm
npm run release

# 6. Push tags
git push --follow-tags
```

## Notes

- All packages use `publishConfig.access: "public"` for scoped public packages
- The root `.npmrc` sets `ignore-scripts=true` to prevent lifecycle script issues during install
- The fixed versioning group in `.changeset/config.json` ensures all packages stay in sync
- The changelog uses `@changesets/changelog-github` which links to GitHub PRs and authors

[Changesets]: https://github.com/changesets/changesets
