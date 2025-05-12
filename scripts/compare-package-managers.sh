#!/bin/bash

# Create the scripts directory if it doesn't exist
mkdir -p $(dirname "$0")

# This script compares the installation speed of npm vs pnpm

echo "Comparing package manager performance..."
echo "========================================="
echo ""

# Clean up
rm -rf node_modules
rm -f package-lock.json
rm -f pnpm-lock.yaml

# Test npm install time
echo "Testing npm installation speed..."
time_start_npm=$(date +%s.%N)
npm install --no-audit --no-fund > /dev/null 2>&1
time_end_npm=$(date +%s.%N)
time_npm=$(echo "$time_end_npm - $time_start_npm" | bc)

# Clean up
rm -rf node_modules
rm -f package-lock.json

# Test pnpm install time
echo "Testing pnpm installation speed..."
time_start_pnpm=$(date +%s.%N)
pnpm install > /dev/null 2>&1
time_end_pnpm=$(date +%s.%N)
time_pnpm=$(echo "$time_end_pnpm - $time_start_pnpm" | bc)

# Calculate disk space
npm_size=$(du -sh node_modules | cut -f1)
rm -rf node_modules
pnpm install > /dev/null 2>&1
pnpm_size=$(du -sh node_modules | cut -f1)

# Show results
echo ""
echo "Results:"
echo "========================================="
echo "npm install time:   $time_npm seconds"
echo "pnpm install time:  $time_pnpm seconds"
echo ""
echo "Time savings:       $(echo "($time_npm - $time_pnpm) / $time_npm * 100" | bc -l | xargs printf "%.2f")%"
echo ""
echo "Disk space usage:"
echo "npm node_modules:   $npm_size"
echo "pnpm node_modules:  $pnpm_size"
echo ""
echo "pnpm advantages:"
echo "- Faster installation times"
echo "- Efficient disk space usage"
echo "- Better dependency resolution"
echo "- Built-in monorepo support"
echo "- Stricter dependency tree (prevents 'phantom' dependencies)" 