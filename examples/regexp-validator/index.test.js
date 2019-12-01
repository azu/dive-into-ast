const assert = require("assert");
const { noEval } = require("./index");
const validationResult = noEval(`
eval(1+1);
`);
// ok
assert.deepStrictEqual(validationResult, {
    "ok": false,
    "errors": [
        { "text": "eval(1+1)", "range": [1, 10] }
    ]
});
// false-positive: it should be ok: true
const validationResult2 = noEval(`
// eval(1+1); <= comment
`);
assert.deepStrictEqual(validationResult2, {
    "ok": false,
    "errors": [
        { "text": "eval(1+1)", "range": [4, 13] }
    ]
});
