const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  try {
    const eventName = core.getInput('event_name')
    const event = JSON.parse(core.getInput('event'))
    const githubToken = core.getInput('github_token')

    const octokit = new github.GitHub(githubToken)

    const url = event.issue.pull_request.url
    const urlParts = url.split('/')
    const owner = urlParts[4]
    const repo = urlParts[5]
    const pull_number = urlParts[7]

    //  https://developer.github.com/v3/pulls/#get-a-single-pull-request
    const { data: pullRequest } = await octokit.pulls.get({
      owner,
      repo,
      pull_number,
    })

    const ref = pullRequest.head.ref
    const sha = pullRequest.head.sha
    core.setOutput('ref', ref)
    core.setOutput('sha', sha)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
