FROM debian:9.6-slim

LABEL "com.github.actions.name"="Slack"
LABEL "com.github.actions.description"="Send a Slack message via a webhook URL"
LABEL "com.github.actions.icon"="hash"
LABEL "com.github.actions.color"="gray-dark"

LABEL version="1.0.0"
LABEL repository="https://github.com/store2be/github-actions"
LABEL homepage="https://github.com/store2be/github-actions"
LABEL maintainer="store2be <tech@store2be.com>"

RUN apt-get update && apt-get install -y curl

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
