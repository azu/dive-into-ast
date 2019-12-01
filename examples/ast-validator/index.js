const { parse } = require("acorn");
const { walk } = require("estree-walker");

export function validate(code: string) {
    const AST = parse(code, {locations: true});
    walk(AST, {
        enter(node) {

        }
    })
}
