# Prettier

## Example usage

```yaml
jobs:
  prettier:
    name: Prettier
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
        with:
          fetch-depth: 1
      - name: Run Prettier
        uses: store2be/github-actions/prettier@master
```

## Check it out locally

```bash
docker build -t gha-prettier .
docker run -ti --rm --entrypoint "" gha-prettier bash
```
