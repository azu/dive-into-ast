const { parse } = require("acorn");
const { walk } = require("estree-walker");

const isEval = (node) => {
    return node.type === "CallExpression"
        && node.callee
        && node.callee.type === "Identifier"
        && node.callee.name === "eval";
};

export function validate(code) {
    const AST = parse(code, { locations: true });
    const errors = [];
    walk(AST, {
        enter(node) {
            if (isEval(node)) {
                errors.push({
                    message: "Disallow to use `eval`",
                    range: node.range,
                    text: code.slice(node.range[0], node.range[1])
                })
            }
        }
    });
    return {
        ok: errors.length === 0,
        errors
    }
}
