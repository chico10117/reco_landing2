#!/bin/bash

# Required Node version
REQUIRED_VERSION="20"

# Get current Node version
CURRENT_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)

echo "Current Node version: $(node -v)"
echo "Required Node version: v$REQUIRED_VERSION.x"

if [ "$CURRENT_VERSION" -ne "$REQUIRED_VERSION" ]; then
  echo "⚠️  Warning: You're using Node v$CURRENT_VERSION.x, but this project requires Node v$REQUIRED_VERSION.x"
  
  # Check if nvm is installed
  if command -v nvm &> /dev/null; then
    echo "Using nvm to switch Node version..."
    
    # Check if the required version is installed
    if nvm ls $REQUIRED_VERSION &> /dev/null; then
      nvm use $REQUIRED_VERSION
    else
      echo "Installing Node v$REQUIRED_VERSION with nvm..."
      nvm install $REQUIRED_VERSION
      nvm use $REQUIRED_VERSION
    fi
  else
    echo "You need to use Node v$REQUIRED_VERSION.x for this project."
    echo "Here are some options to resolve this:"
    echo "1. Use nvm (Node Version Manager): https://github.com/nvm-sh/nvm"
    echo "2. Use volta: https://volta.sh/"
    echo "3. Manually install Node v$REQUIRED_VERSION.x"
    exit 1
  fi
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Run the dev server
echo "Starting development server..."
npm run dev 