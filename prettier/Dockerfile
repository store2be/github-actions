FROM node:12
LABEL maintainer="store2be <tech@store2be.com>"

LABEL com.github.actions.name="Prettier"
LABEL com.github.actions.description="Lint your JS and TS code with Prettier"
LABEL com.github.actions.icon="code"
LABEL com.github.actions.color="yellow"

RUN npm install -g prettier

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
