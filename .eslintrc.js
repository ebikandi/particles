module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
        },
      },
      plugins: ['prettier'],
      extends: ['airbnb-base', 'prettier'],
      rules: {
        'linebreak-style': 'off',
        'no-console': 'off',
        'no-plusplus': 'off',
        'no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
          },
        ],
        'no-param-reassign': 'off',
      },
    };