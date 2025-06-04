#!/bin/bash

# Script to install all required dependencies for the Reco landing page

echo "Installing dependencies..."
pnpm install

echo "Installing analytics and animation dependencies..."
pnpm install -D @vercel/analytics svelte-framer-motion

echo "Initializing Shadcn-Svelte (if not already initialized)..."
if [ ! -d "src/lib/components/ui" ]; then
  echo "Initializing Shadcn UI components..."
  pnpm dlx shadcn-svelte@latest init
else
  echo "Shadcn UI components already initialized, skipping."
fi

echo "Creating necessary directories..."
mkdir -p static/img

echo "Setting up environment..."
if [ ! -f ".env" ]; then
  echo "Creating .env file with placeholder values..."
  echo "GOOGLE_ANALYTICS_ID=G-XXXXXXXX" > .env
  echo "HOTJAR_ID=XXXXXX" >> .env
else
  echo ".env file already exists, skipping."
fi

echo "Setup complete! You can now run 'pnpm dev' to start the development server."
echo "Don't forget to replace the placeholder image files in static/img/ with actual images." 