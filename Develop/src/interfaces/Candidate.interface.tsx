// TODO: Create an interface for the Candidate objects returned by the API
interface GithubUserPreview {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  type: string;
  [key: string]: any; // optional: in case GitHub adds more fields
}

interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  [key: string]: any; // optional flexibility
}
