# Dive into AST [![Actions Status](https://github.com/azu/dive-into-ast/workflows/test/badge.svg)](https://github.com/azu/dive-into-ast/actions?query=workflow%3Atest)

Dive into AST(Abstract Syntax Tree) in JavaScript.

You learn AST by creating AST Tools/Libraries.


## Presentations

- [ ] URL

## Implementations

- Validations: `no-eval`
    - [x] [Validator using RegExp](examples/regexp-validator)
    - [x] [Validator using AST](examples/ast-validator)
    - [x] [Validator as ESLint rule](examples/eslint-plugins-no-eval)
- Transforms
    - [ ] Babel plugins
    - [ ] JSCodeShift(codemod)

## Tests

This is a monorepo and use [yarn](https://yarnpkg.com/).

    yarn install
    yarn test

## License

MIT © Azu
