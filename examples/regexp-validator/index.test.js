const assert = require("assert");
const { noEval } = require("./index");
const validationResult = noEval(`
var code = "1+1";
eval(code);
`);
// result
assert.deepStrictEqual(validationResult, { "ok": false, "errors": [{ "text": "eval(code)", "range": [19, 29] }] });
