module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['ember'],
  extends: ['eslint:recommended', 'plugin:ember/recommended'],
  env: {
    browser: true
  },

  rules: {
    'linebreak-style': ['error', 'unix'],
    'ember/no-observers': 0,
    'ember/local-modules': 1, // 3818 warnings
    'ember/no-empty-attrs': 0,
    'ember/use-brace-expansion': 0, // 34 warnings
    'ember/closure-actions': 'off',
    'ember/no-side-effects': 'off',
    'ember/no-empty-attrs': 0,

    'ember/order-in-routes': 0,
    'ember/order-in-models': 0,
    'ember/order-in-components': 0,
    'ember/order-in-controllers': 0,
    'ember/no-empty-attrs': 0,

    'ember/use-ember-get-and-set': 0,
    'ember/alias-model-in-controller': 0,
    'ember/named-functions-in-promises': 0,
    'ember/require-super-in-init': 1,

    'ember/avoid-leaking-state-in-ember-objects': 0,

    'ember/no-global-jquery': 0 // maybe temporary only - but as of commit #6dffc9b on 2018-02-06 it throws 254 errors
  },

  globals: {
    Masonry: true,
    d3: true,
    RadarChart: true,
    SimpleMDE: true,
    Masonry: true,
    Set: true,
    Promise: true,
    server: true,
    Beacon: true
  },

  overrides: [
    // node files
    {
      files: [
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
