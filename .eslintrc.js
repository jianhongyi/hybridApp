// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: "module",
        allowImportExportEverywhere: true
    },
    env: {
        browser: true,
    },
    globals: {
        "WebViewJavascriptBridge": "off"
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        'semi': 2,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 打包检验debugger
        "global-require": 0
    }
}
