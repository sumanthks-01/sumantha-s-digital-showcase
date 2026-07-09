import { useQueries } from '@tanstack/react-query';

export interface GithubRepo {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
}

async function fetchRepo(fullName: string): Promise<GithubRepo> {
  const res = await fetch(`https://api.github.com/repos/${fullName}`, {
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) throw new Error(`GitHub ${res.status} for ${fullName}`);
  return res.json();
}

export function useGithubRepos(fullNames: string[]) {
  const results = useQueries({
    queries: fullNames.map((fn) => ({
      queryKey: ['github-repo', fn],
      queryFn: () => fetchRepo(fn),
      staleTime: 10 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      retry: 1,
    })),
  });

  const isLoading = results.some((r) => r.isLoading);
  const error = results.find((r) => r.error)?.error as Error | undefined;
  const repos = results
    .map((r) => r.data)
    .filter((d): d is GithubRepo => Boolean(d));

  return { repos, isLoading, error };
}
