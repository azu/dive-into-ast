const { RuleTester } = require("eslint");
const rule = require("./no-eval");

const tester = new RuleTester();
tester.run("no-eval", rule, {
    valid: [
        `new Function("return 1+1;")`,
        `// eval("1+1")`
    ],
    invalid: [
        {
            code: `eval(1+1)`,
            errors: [{ message: "Don't use eval" }]
        }
    ]
});
