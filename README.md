# Dive into AST [![Actions Status](https://github.com/azu/dive-into-ast/workflows/test/badge.svg)](https://github.com/azu/dive-into-ast/actions?query=workflow%3Atest)

Dive into AST(Abstract Syntax Tree) in JavaScript.

You learn AST by creating AST Tools/Libraries.


## Presentations

For mode details, see presentation(japanese).

- <https://dive-into-ast.netlify.com/>

## Implementations

- Validations: `no-eval`
    - [x] [Validator using RegExp](examples/regexp-validator)
    - [x] [Validator using AST](examples/ast-validator)
    - [x] [Validator as ESLint rule](examples/eslint-plugins-no-eval)
- Transforms
    - [x] [Babel plugins](examples/babel-plugin-no-console): Remove console 
    - [x] [Babel plugins](examples/babel-plugin-no-console): Replace console 
    - [x] [JSCodeShift](examples/jscodeshift-replace-console-log): Replace console

## See also

- [Quramy/eslint-plugin-tutorial: A tutorial/template repository to explain how to create your eslint plugins](https://github.com/Quramy/eslint-plugin-tutorial)
- [JavaScriptのリファクタリングツール「jscodeshift」の使い方 - Qiita](https://qiita.com/toshi-toma/items/93f1dfdf0a820fe6fccc)

## Tests

This is a monorepo and use [yarn](https://yarnpkg.com/).

    yarn install
    yarn test

## License

MIT © Azu
