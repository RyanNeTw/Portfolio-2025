import { Octokit } from "octokit";

if (!process.env.NEXT_PUBLIC_GITHUB_API_KEY) {
  throw new Error(`Configure variable GITHUB_API_KEY`);
}

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_API_KEY,
});

export default octokit;
