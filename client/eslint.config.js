import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    settings: { react: { version: '19.2' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
       ...js.configs.recommended.rules,
       ...react.configs.recommended.rules,
       ...reactHooks.configs.recommended.rules,
       'react-refresh/only-export-components': 'warn',
       'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
       'no-console': ['warn', { allow: ['warn', 'error'] }],
       // For React 19+, we don't need to import React for JSX
       'react/react-in-jsx-scope': 'off',
     },
  },
]
