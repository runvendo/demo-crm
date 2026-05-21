#!/usr/bin/env bash
# vendo-prebuild.sh — runs during `mirror-tool-baseline.mjs` to bake
# node_modules into the baseline tarball so sandbox boot skips the
# cold npm-install step (~30-60s saved per session).
set -euo pipefail

npm install --no-audit --no-fund --loglevel=warn
