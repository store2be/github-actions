# Rubocop

## Example usage

```yaml
jobs:
  rubocop:
    name: Rubocop
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
        with:
          fetch-depth: 1
      - name: Run Rubocop
        uses: store2be/github-actions/rubocop@master
```

## Check it out locally

```bash
docker build -t gha-rubocop .
docker run -ti --rm --entrypoint "" gha-rubocop bash
```
