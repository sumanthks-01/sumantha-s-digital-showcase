## Goal

Replace the hardcoded `PROJECTS` array in `src/components/ProjectsSection.tsx` with data fetched at runtime from the GitHub public REST API for the 7 repos you listed.

## Repos

- SpendWise-A_Contolled_Spending_Analyzer
- Eat_nd_Greet
- CodePulse-AI
- endee
- Kaarmic-Canteen
- Text-Summarizer
- Diabities-Prediction-Using-ML

Plus the existing two (Network-Intrusion-Detection-NIDS- and Story-Weaver) — I'll keep them so all 9 show, unless you want the old ones removed.

## What each card will show

Pulled from `GET https://api.github.com/repos/sumanthks-01/{repo}`:

- **Title** — `name` (underscores/dashes replaced with spaces)
- **Description** — `description`
- **Tech badges** — `language` + `topics` (deduped)
- **Live demo link** — `homepage` (only if non-empty)
- **Source link** — `html_url`
- **Category** — derived from `language`/`topics`: Python/ML topics → "AI/ML", JS/TS/HTML → "Web App", else "Other"
- **Status** — "Completed" (static)

The existing filter chips (`All`, `Web App`, `AI/ML`) stay; I'll add `Other` only if a repo falls into it.

## Implementation

1. Create `src/hooks/useGithubRepos.ts` — takes a list of `owner/repo` strings, uses `@tanstack/react-query` (already in the app) to fetch each in parallel with `useQueries`, caches for 10 min, exposes `{ repos, isLoading, error }`.
2. Update `src/components/ProjectsSection.tsx`:
   - Define the repo list as a constant.
   - Call `useGithubRepos`.
   - Map API responses to the existing `Project` shape (same card markup, no visual changes).
   - Show skeleton placeholder cards while loading and a small inline error message on failure.
   - Keep filter logic; compute `FILTERS` dynamically from the categories present.

## Notes / trade-offs

- GitHub unauthenticated API allows ~60 requests/hour per IP. Fine for a portfolio; results are cached in-browser by React Query so navigation doesn't refetch.
- No backend, no secrets, no new deps.

## Files changed

- add `src/hooks/useGithubRepos.ts`
- edit `src/components/ProjectsSection.tsx`
