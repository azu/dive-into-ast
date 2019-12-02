const assert = require("assert");
const { noEval } = require("./index");
// 上手くevalを判定できるパターン
const validationResult = noEval(`
eval(1+1);
`);
assert.deepStrictEqual(validationResult, {
    ok: false,
    errors: [{ text: "eval(1+1)", range: [1, 10] }]
});

// コメントのevalを誤検知してるパターン
const validationResult2 = noEval(`
// eval(1+1); <= THIS IS COMMENT
`);
assert.deepStrictEqual(validationResult2, {
    ok: false,
    errors: [{ text: "eval(1+1)", range: [4, 13] }]
});
