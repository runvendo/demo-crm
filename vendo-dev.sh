#!/usr/bin/env bash
# vendo-dev.sh — boot the Next.js dev server inside the customize sandbox.
#
# Called by @vendo/customize lifecycle after baseline + tenant hydration
# (lifecycle resolves the command via web/src/lib/customize/hooks.ts:startDevCommand
# → `bash /workspace/baseline/vendo-dev.sh`).
#
# The tenant fork lives at /workspace/tenant and is git-tracked; we run
# `next dev` from there so agent edits surface via Next's HMR. The baseline
# at /workspace/baseline is read-only reference source.
#
# Idempotent — safe to re-run across pauses, resumes, and snapshot restores.
set -euo pipefail

TENANT_DIR=/workspace/tenant
BASELINE_DIR=/workspace/baseline
PORT=3000

# Defensive seed: customize sessions usually arrive with a hydrated tenant
# bundle, but if the provisionBundle race ever leaves /workspace/tenant
# empty we copy the baseline source over so the dev server has something
# to serve. `cp -an` preserves any tenant-side .git / .mcp.json the
# lifecycle wrote before us.
if [[ ! -f "$TENANT_DIR/package.json" ]]; then
  echo "[vendo-dev] tenant missing package.json — seeding from baseline"
  cp -an "$BASELINE_DIR"/. "$TENANT_DIR"/
fi

cd "$TENANT_DIR"

# Cold-boot install. E2B preserves /workspace across pause/resume, so once
# node_modules is laid down it survives. npm (vs. the package.json's
# declared pnpm) because the customize-sandbox template ships npm but not
# pnpm, and demo-crm doesn't commit a pnpm-lock.yaml.
if [[ ! -d node_modules ]]; then
  echo "[vendo-dev] installing deps..."
  npm install --no-audit --no-fund --loglevel=warn
fi

# Foreground exec so the lifecycle's nohup wrapper supervises us. Bind to
# 0.0.0.0 so the iframe-proxy on :4000 can reach localhost:3000 (Next 15
# binds to localhost by default, which the proxy can't reach).
exec npx next dev --port "$PORT" --hostname 0.0.0.0
