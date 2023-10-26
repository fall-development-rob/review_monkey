
const { Octokit } = require("@octokit/rest");
import {getInput, warning} from '@actions/core'
const github = require('@actions/github');
import {context as githubContext} from '@actions/github'
// const openai = require("openai");


const token = getInput('GITHUB_TOKEN') || process.env.GITHUB_TOKEN

const octokit = github.getOctokit(token);

// NOTE : Can be pull_request || pull_request_target
const githubEvent = 'pull_request_review_comment'

async function main() {
    const context = githubContext
//   const pr = process.env.GITHUB_EVENT_PATH;
  
  // Parse the PR data
  // Get the PR's content

  // Use GPT-3 to generate a review comment

  // Post the review comment to the PR
  await octokit.rest.issues.createComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.payload.pull_request.number,
    body: "AI Review: ",
  });
}

main();