const prettierConfig = require('./.prettierrc.js');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': ['error', prettierConfig],
  },
  plugins: ['prettier'],
};
