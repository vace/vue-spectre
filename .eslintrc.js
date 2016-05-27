module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'no-multiple-empty-lines':0,
    'comma-spacing':[0, { "before": false, "after": true }],
    "comma-style": [0, "last"], 
    "indent": [0, 0, { "SwitchCase": 0 }],
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
    "space-before-function-paren": [0, "always"],
    "space-before-blocks": [0, "always"],
    "no-trailing-spaces":0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
