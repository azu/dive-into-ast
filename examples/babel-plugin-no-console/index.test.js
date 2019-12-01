const pluginTester = require('babel-plugin-tester').default;
const plugin = require("./index");
pluginTester({
        plugin: plugin,
        tests: [
            {
                code: `console.log(1 + 1)`,
                output: ``
            }
        ]
    }
);
