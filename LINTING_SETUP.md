# 🧹 ESLint & Prettier Setup Guide

## 📋 Overview

This project uses **ESLint** for code linting and **Prettier** for code
formatting to maintain consistent code quality and style across the entire
codebase.

## 🚀 Quick Start

### 1. Install VS Code Extensions

- **ESLint**: `dbaeumer.vscode-eslint`
- **Prettier**: `esbenp.prettier-vscode`

### 2. Restart VS Code

After installing extensions, restart VS Code to ensure they're properly loaded.

### 3. Auto-format on Save

The project is configured to automatically format code on save. Just save any
file and it will be formatted automatically!

## 🔧 Available Scripts

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `npm run lint`         | Check for linting issues                   |
| `npm run lint:fix`     | Automatically fix linting issues           |
| `npm run lint:check`   | Strict linting check (no warnings allowed) |
| `npm run format`       | Format all code with Prettier              |
| `npm run format:check` | Check if code is properly formatted        |
| `npm run code:check`   | Run both linting and formatting checks     |
| `npm run code:fix`     | Fix both linting and formatting issues     |

## 📁 Configuration Files

### ESLint Configuration (`eslint.config.js`)

- **TypeScript Support**: Full TypeScript linting with strict rules
- **Common Rules**: Enforces best practices and consistent code style
- **Prettier Integration**: Works seamlessly with Prettier
- **Custom Rules**: Project-specific linting rules

### Prettier Configuration (`.prettierrc`)

- **Code Style**: 2-space indentation, single quotes, trailing commas
- **Line Length**: 100 characters max (80 for JSON/Markdown)
- **File-specific**: Different rules for different file types

### VS Code Settings (`.vscode/settings.json`)

- **Auto-format**: Format on save enabled
- **ESLint Integration**: Real-time linting feedback
- **Prettier Default**: Prettier as the default formatter

## 🎯 Key Features

### ✅ **Automatic Formatting**

- Code is automatically formatted when you save files
- Consistent indentation, spacing, and line breaks
- No need to manually format code

### ✅ **Real-time Linting**

- ESLint provides instant feedback as you type
- Catches common mistakes and style violations
- Suggests improvements in real-time

### ✅ **TypeScript Support**

- Full TypeScript linting with strict rules
- Catches type-related issues early
- Enforces TypeScript best practices

### ✅ **Custom Rules**

- Project-specific linting rules
- Balanced strictness for development
- Focuses on maintainable code quality

## 🚨 Common Issues & Solutions

### 1. **"Cannot find module" Errors**

```bash
# Reinstall dependencies
npm install

# Clear ESLint cache
npm run lint:fix
```

### 2. **Formatting Conflicts**

```bash
# Reset formatting
npm run format

# Check for conflicts
npm run format:check
```

### 3. **Linting Errors**

```bash
# Auto-fix issues
npm run lint:fix

# Check specific file
npx eslint src/routes/auth.ts
```

### 4. **VS Code Not Formatting**

- Ensure Prettier extension is installed
- Check that Prettier is set as default formatter
- Restart VS Code after configuration changes

## 📝 Code Style Guidelines

### **Indentation & Spacing**

- Use 2 spaces for indentation
- No tabs allowed
- Consistent spacing around operators

### **Quotes & Strings**

- Use single quotes for strings
- Use template literals when possible
- Consistent quote usage

### **Line Length**

- Maximum 100 characters per line
- Break long lines at logical points
- Use line breaks for readability

### **Import/Export**

- Use consistent import ordering
- Group imports by type
- Remove unused imports

### **Function Definitions**

- Use arrow functions when possible
- Consistent parameter formatting
- Clear return type annotations

## 🔍 Linting Rules Explained

### **TypeScript Rules**

- `@typescript-eslint/no-unused-vars`: Prevents unused variables
- `@typescript-eslint/no-explicit-any`: Warns about `any` types
- `@typescript-eslint/consistent-type-imports`: Enforces consistent import types

### **General Rules**

- `no-console`: Allows console.log for development
- `prefer-const`: Encourages const over let
- `no-trailing-spaces`: Removes trailing whitespace
- `eol-last`: Ensures files end with newline

### **Code Quality Rules**

- `no-unused-expressions`: Prevents unused expressions
- `object-shorthand`: Encourages object shorthand syntax
- `prefer-template`: Encourages template literals

## 🛠️ Customization

### **Adding New Rules**

Edit `eslint.config.js` to add project-specific rules:

```javascript
rules: {
  // Your custom rules here
  'your-custom-rule': 'error',
}
```

### **Modifying Prettier Settings**

Edit `.prettierrc` to change formatting preferences:

```json
{
  "printWidth": 120,
  "tabWidth": 4
}
```

### **VS Code Integration**

Modify `.vscode/settings.json` for editor-specific settings:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## 📊 Quality Metrics

### **Current Status**

- **ESLint**: Configured with strict TypeScript rules
- **Prettier**: Consistent code formatting
- **VS Code**: Full integration with auto-formatting

### **Code Quality Goals**

- Zero linting errors
- Consistent code style
- Type safety compliance
- Maintainable code structure

## 🚀 Best Practices

### **Development Workflow**

1. **Write Code**: Focus on functionality
2. **Save File**: Auto-formatting happens automatically
3. **Check Linting**: Run `npm run lint` before commits
4. **Fix Issues**: Use `npm run lint:fix` for auto-fixes

### **Commit Guidelines**

- Ensure code passes `npm run code:check`
- Fix all linting errors before committing
- Use descriptive commit messages

### **Team Collaboration**

- All team members use the same configuration
- Consistent code style across the project
- Automated formatting prevents style conflicts

## 🔗 Related Documentation

- **ESLint**: [https://eslint.org/](https://eslint.org/)
- **Prettier**: [https://prettier.io/](https://prettier.io/)
- **TypeScript ESLint**:
  [https://typescript-eslint.io/](https://typescript-eslint.io/)

## 🆘 Troubleshooting

### **Common Problems**

1. **ESLint not working**
   - Check if ESLint extension is installed
   - Restart VS Code
   - Verify configuration file exists

2. **Prettier conflicts**
   - Ensure Prettier is default formatter
   - Check for conflicting extensions
   - Clear VS Code cache

3. **TypeScript errors**
   - Run `npm run build` to check types
   - Verify `tsconfig.json` configuration
   - Check for missing dependencies

### **Getting Help**

- Check the console for error messages
- Run `npm run lint` for detailed feedback
- Review ESLint and Prettier documentation
- Ask team members for assistance

---

**Happy Coding! 🎉**

Your code will now be automatically formatted and linted for consistent quality!
