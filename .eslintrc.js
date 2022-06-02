module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/warnings'
    ],
    rules: {
        "camelcase": [1, { "properties": "always" }],
        "no-alert": 1,
        "no-console": 1,
        "no-trailing-spaces": [1, { "skipBlankLines": true }],
        "no-multi-spaces": 0,
        "prefer-const": 1,
        "quotes": [1, "single", "avoid-escape"],
        "semi": [2, "never"],
    }
}