module.exports = babel => {
    const { types: t } = babel;
    return {
        name: "babel-plugin-replace-console-log",
        visitor: {
            CallExpression(path) {
                const callee = path.node.callee;
                const isConsole =
                    callee.type === "MemberExpression" &&
                    callee.object.name === "console" &&
                    callee.property.name === "log";
                if (isConsole) {
                    // replace `console.log` with `log`
                    const originalArguments = path.node.arguments;
                    path.replaceWith(t.CallExpression(t.Identifier("log"), originalArguments));
                }
            }
        }
    };
};
