#!/bin/bash

# Script to preserve package files while updating generated types

echo "🔄 Preserving package files and updating generated types..."

# Store the current package files
echo "📦 Backing up package files..."
mkdir -p ../shared-types-backup
cp -r ../shared-types/package.json ../shared-types-backup/ 2>/dev/null || echo "No package.json to backup"
cp -r ../shared-types/README.md ../shared-types-backup/ 2>/dev/null || echo "No README.md to backup"
cp -r ../shared-types/USAGE.md ../shared-types-backup/ 2>/dev/null || echo "No USAGE.md to backup"
cp -r ../shared-types/index.ts ../shared-types-backup/ 2>/dev/null || echo "No index.ts to backup"
cp -r ../shared-types/index.d.ts ../shared-types-backup/ 2>/dev/null || echo "No index.d.ts to backup"
cp -r ../shared-types/publish.sh ../shared-types-backup/ 2>/dev/null || echo "No publish.sh to backup"
cp -r ../shared-types/.gitignore ../shared-types-backup/ 2>/dev/null || echo "No .gitignore to backup"

# Generate types (this will overwrite the directory)
echo "🔧 Generating types with Prisma..."
npx prisma generate

# Restore package files
echo "📦 Restoring package files..."
cp -r ../shared-types-backup/* ../shared-types/ 2>/dev/null || echo "No files to restore"

# Clean up backup
rm -rf ../shared-types-backup

echo "✅ Types generated and package files preserved!"
