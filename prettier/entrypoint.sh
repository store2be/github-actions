#!/bin/sh

set -e

prettier --config=./.prettierrc --check '{**/,}*.{json,md,yaml,yml,ts,tsx,js,css,scss}' --ignore-path .gitignore
