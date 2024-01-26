module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'standard-with-typescript',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '{react}',
            group: 'builtin',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'no-var': 'error', // var 금지
    'no-multiple-empty-lines': 'error', // 여러 줄 공백 금지
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }], // console.log() 금지
    eqeqeq: 'error', // === 일치 연산자 사용
    'dot-notation': 'error', // 가능하다면 dot notation 사용
    'no-unused-vars': 'error', // 사용하지 않는 변수 금지
  },
};
