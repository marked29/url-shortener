/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
import { execFileSync } from "child_process";

const exec = (command, args) => {
  console.log("> " + [command].concat(args).join(" "));
  const options = {
    cwd: process.cwd(),
    env: process.env,
    stdio: "pipe",
    encoding: "utf-8",
  };
  return execFileSync(command, args, options);
};

const execGitCmd = (args) => exec("git", args).trim().toString().split("\n");

const getBranchName = () =>
  execGitCmd(["rev-parse", "--abbrev-ref", "HEAD"]).join("");

export const listChangedFiles = () => {
  const branchName = getBranchName();

  if (branchName !== "master") {
    execGitCmd(["fetch", "origin", "master:master"]);
  }

  const mergeBase = execGitCmd(["merge-base", "HEAD", "master"]);
  return new Set([
    ...execGitCmd(["diff", "--name-only", "--diff-filter=ACMRTUB", mergeBase]),
    ...execGitCmd(["ls-files", "--others", "--exclude-standard"]),
  ]);
};
