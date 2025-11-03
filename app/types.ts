export enum EndPoints {
  INFORMATIONS = "api/informations",
  GITHUB_PROFIL = "api/github/profil",
}

export type Informations = {
  socials: SociaType[];
  projects: ProjectType[];
  experiences: ExperienceType[];
  studies: StudiType[];
};

type Init = {
  id: string;
  created_at: string;
};

export type ProjectType = Init & {
  name: string;
  type: string;
  description: string;
  date_start: string;
  date_end: string;
  url: string;
  image_url: string;
};

export type SociaType = Init & {
  link: string;
  name: string;
};

export type ExperienceType = Init & {
  name: string;
  type: string;
  work: string;
  date_start: string;
  date_end?: string;
  description: string;
  url: string;
  image_url: string;
};

export type StudiType = Init & {
  name: string;
  diploma_name: string;
  date_start: string;
  date_end: string;
  description: string;
  url: string;
  image_url: string;
};

export type GithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  private_gists: number;
  total_private_repos: number;
  owned_private_repos: number;
  disk_usage: number;
  collaborators: number;
  two_factor_authentication: boolean;
  plan: {
    name: string;
    space: number;
    private_repos: number;
    collaborators: number;
  };
};
