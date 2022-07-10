module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    semi: [ 'warn', 'never' ],
    'react/prop-types': 'off',
    quotes: [ 'warn', 'single' ],
    'no-multi-spaces': 'error',
    'space-before-function-paren': [ 'warn', 'always' ],
    'non-nullish value': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'off', // Checks effect dependencies
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'prefer-const': 'off',
    'jsx-quotes': [ 'warn', 'prefer-single' ],
    'object-curly-spacing': [ 'warn', 'always' ],
    'array-bracket-spacing': [ 'warn', 'always' ],
  },
}
