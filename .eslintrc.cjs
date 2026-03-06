module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'google',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': '@typescript-eslint/parser',
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'extraFileExtensions': ['.vue'],
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  'rules': {
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'global-require': 0,
    'prefer-promise-reject-errors': 'off',

    // TypeScript
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',

    'comma-spacing': [2, {
      before: false,
      after: true,
    }],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    'keyword-spacing': ['error', {
      'overrides': {
        'if': {'after': true},
        'else': {'before': true, 'after': true},
      },
    }],
    'max-len': 'off',
    'valid-jsdoc': 'off',
    'require-jsdoc': 'off',

    // 使用外部套件遇到 function 開頭是大寫
    'new-cap': ['error', {
      'newIsCap': false,
      'capIsNew': false,
    }],
  },
};
