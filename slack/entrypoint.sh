#!/bin/sh
set -e

if [ -z ${SLACK_WEBHOOK_URL+x} ]; then
  echo "Please set the SLACK_WEBHOOK_URL secret."
  exit 1
fi

echo ""
echo "Sending the following message to the Slack webhook URL:"

if [ -z ${JSON_FILE+x} ]; then
  echo $*
  curl -X POST \
    -H 'Content-type: application/json' \
    --data "$*" \
    $SLACK_WEBHOOK_URL
else
  cat "$JSON_FILE"
  curl -X POST \
    -H 'Content-type: application/json' \
    --data-binary @$JSON_FILE \
    $SLACK_WEBHOOK_URL
fi

echo ""
