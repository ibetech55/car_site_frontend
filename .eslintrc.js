module.exports = {
  extends: [
    'react-app',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [
      2,
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [
      2,
      'tag-aligned',
    ],
  },
}

