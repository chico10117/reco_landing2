#!/bin/bash

# Create scripts directory if it doesn't exist
mkdir -p $(dirname "$0")

echo "Cleaning pnpm cache and reinstalling dependencies..."

# Remove node_modules and lockfile
rm -rf node_modules
rm -rf .pnpm-store
rm -f pnpm-lock.yaml

# Clear pnpm store cache (uncomment if you want to clear the global cache)
# pnpm store prune

# Reinstall dependencies
pnpm install

echo "Done! Cache cleaned and dependencies reinstalled." 