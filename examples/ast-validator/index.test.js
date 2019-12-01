const assert = require("assert");
const { validate } = require("./index");
const validationResult = validate(`
eval(1+1);
`);
// result
assert.deepStrictEqual(validationResult, { "ok": false, "errors": [{ "text": "eval(code)", "range": [19, 29] }] });
