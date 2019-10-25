FROM ruby:2.5
LABEL maintainer="store2be <tech@store2be.com>"

LABEL com.github.actions.name="Rubocop"
LABEL com.github.actions.description="Lint your Ruby code with Rubocop"
LABEL com.github.actions.icon="code"
LABEL com.github.actions.color="red"

RUN gem install rubocop:0.75.1
RUN gem install rubocop-performance:1.5.0

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
