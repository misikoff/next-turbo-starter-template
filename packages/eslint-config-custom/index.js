module.exports = {
  extends: [
    'next',
    'turbo',
    'prettier',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          { pattern: 'react', group: 'builtin', position: 'before' },

          { pattern: 'next', group: 'external', position: 'before' },
          { pattern: 'next/**', group: 'external', position: 'before' },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
  },
}
