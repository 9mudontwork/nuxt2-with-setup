module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],

    'vue/padding-line-between-blocks': ['error', 'always'],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'import', next: 'export' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
    ],

    'lines-between-class-members': ['error', 'always'],

    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2,
      },
    ],

    // thread of tailwind https://github.com/prettier/prettier/issues/10918
    // config ของ prettier
    'prettier/prettier': [
      'error',
      {
        usePrettierrc: false,
        endOfLine: 'auto',
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'always',
        vueIndentScriptAndStyle: true,
      },
    ],

    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: {
    //       max: 1,
    //       allowFirstLine: true,
    //     },
    //     multiline: {
    //       max: 1,
    //       allowFirstLine: false,
    //     },
    //   },
    // ],
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    // parser: '@babel/eslint-parser',
    requireConfigFile: false,
    sourceType: 'module',
    eecmaVersion: 'latest',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: true,
    },
  },
}
