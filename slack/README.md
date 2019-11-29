# Slack

From [pullreminders/slack-action](https://github.com/pullreminders/slack-action).

## Example usage

```yaml
- name: Notify on Slack
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
  uses: store2be/github-actions/slack@master
  with:
    args: '{\"channel\":\"#test\",\"text\":\"Hello world\"}'
```

## Check it out locally

It's just using curl, so no need to use the Docker image here.

```bash
export SLACK_WEBHOOK_URL="..."
./entrypoint.sh '{"channel":"#test","text":"Hello world"}'
```
