#!/usr/bin/env bash
# Loads the test fixture (six programmes exported from production) into a fresh
# `captions` index. Usage: test/seed.sh [elasticsearch_url]
set -euo pipefail

ES=${1:-http://localhost:9201}
DIR=$(dirname "$0")/fixtures

curl -s -o /dev/null -X DELETE "$ES/captions"
curl -sf -o /dev/null -X PUT "$ES/captions" -H 'Content-Type: application/json' \
  --data-binary "{\"settings\":{\"number_of_shards\":1,\"number_of_replicas\":0},$(tail -c +2 "$DIR/mapping.json")"
curl -sf -X POST "$ES/captions/_bulk?refresh=true" -H 'Content-Type: application/x-ndjson' \
  --data-binary "@$DIR/captions.ndjson" | grep -q '"errors":false'
curl -s "$ES/_cat/count/captions"
