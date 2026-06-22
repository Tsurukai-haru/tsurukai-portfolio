import type { NextConfig } from "next";

// GitHub Pages serves this site from https://<user>.github.io/<repo>/
// so every asset URL needs the repo name prefixed, except when the repo
// itself is named "<user>.github.io" (a user/organization root site).
// GITHUB_REPOSITORY is provided automatically inside GitHub Actions as
// "owner/repo" - see .github/workflows/deploy.yml.
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPage = repository.endsWith(".github.io");
const basePath = repository && !isUserOrOrgPage ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
