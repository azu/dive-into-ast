const { parse } = require("acorn");
const { walk } = require("estree-walker");

const isEval = (node) => {
    return node.type === "CallExpression"
        && node.callee
        && node.callee.type === "Identifier"
        && node.callee.name === "eval";
};

module.exports.validate = function (code) {
    const AST = parse(code, { range: true });
    const errors = [];
    walk(AST, {
        enter(node) {
            if (isEval(node)) {
                errors.push({
                    range: [node.start, node.end],
                    text: code.slice(node.start, node.end)
                })
            }
        }
    });
    return {
        ok: errors.length === 0,
        errors
    }
};
