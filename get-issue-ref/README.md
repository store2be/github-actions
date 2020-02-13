# Get issue ref action

This action is for getting the ref of an issue comment on a pull request.

The problem is that the code being used of an issue comment is the default branch of the repository (most of the time `master`) and not the actual code of the pull request. This leads to the problem that any action that wants to act upon issue comments and wants to do something with the code has to get the code somehow.

## Inputs

### `github_token`

**Required** The token to interact with the Github API.

### `event_name`

**Required** The Github Actions event name.

### `event`

**Required** The Github Actions event.

## Outputs

### `ref`

The Git ref that should be used in the [checkout action](https://github.com/actions/checkout).

### `sha`

The Git SHA that can be used in the [checkout action](https://github.com/actions/checkout).

## Example usage

```yaml
name: Workflow XY
on:
  issue_comment:
    types: [created]

jobs:
  build:
    if: github.event_name == 'issue_comment' && contains(github.event.comment.body, '/run')
    name: Build
    runs-on: ubuntu-latest
    steps:
      - name: Get proper ref for an issue comment
        id: get-issue-ref
        uses: store2be/github-actions/get-issue-ref@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          event_name: ${{ github.event }}
          event: ${{ github.event }}
      - name: Checkout
      - uses: actions/checkout@v1
        with:
          ref: ${{ steps.get-issue-ref.outputs.ref }}
          fetch-depth: 1
```
