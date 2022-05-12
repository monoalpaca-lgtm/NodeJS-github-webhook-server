// This is the short name = repo name
export enum RepoName {
  GithubWebhook = "NodeJS-github-webhook-server"
}

type Repo = {
  name: RepoName;
}

export const GithubWebhook: Repo = {
  name: RepoName.GithubWebhook
}


export const RepoByName: {[key: string]: Repo} = {
  [RepoName.GithubWebhook]: GithubWebhook
}
