module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
  'settings': {
    'import/resolver': 'webpack'
  }
}
