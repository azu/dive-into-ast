const assert = require("assert");
const { validate } = require("./index");
// eval呼び出しを判定できてる
const validationResult = validate(`
eval(1+1);
`);
assert.deepStrictEqual(validationResult, {
    ok: false,
    errors: [{ text: "eval(1+1)", range: [1, 10] }]
});
// コメントはコメントとして認識する
const validationResult2 = validate(`
// eval(1+1);
`);
assert.deepStrictEqual(validationResult, {
    ok: true,
    errors: []
});
