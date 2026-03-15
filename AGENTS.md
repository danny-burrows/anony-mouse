# AGENTS.md

This file applies to the entire repository.

## Validation

After making changes to this repo, run the full validation suite from the
repository root before considering the work complete:

```bash
npm run validate
```

That command is the required guardrail for this project. It runs:

- ESLint
- Stylelint
- Prettier check
- `astro check`
- production build

If formatting is the only thing failing, run:

```bash
npm run format
```

Then rerun:

```bash
npm run validate
```

## Dependencies

If you change dependencies in `package.json`, keep `package-lock.json` in sync.

## Completion

Do not treat work as finished while `npm run validate` is failing, unless you
explicitly report the failure and the blocker to the user.
