const assert = require("assert");
const { noEval } = require("./index");
const validationResult = noEval(`
eval(1+1);
`);
// result
assert.deepStrictEqual(validationResult, { "ok": false, "errors": [{ "text": "eval(code)", "range": [19, 29] }] });
