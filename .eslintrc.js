module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0
  }
/*   "eslint.autoFixOnSave": true,  //  启用保存时自动修复,默认只支持.js文件
  "eslint.validate": [
      "javascript",  //  用eslint的规则检测js文件
      {
          "language": "vue",   // 检测vue文件
          "autoFix": true   //  为vue文件开启保存自动修复的功能
      },
      {
          "language": "html",
          "autoFix": true
      },
  ], */
}
