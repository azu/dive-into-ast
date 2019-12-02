module.exports = babel => {
    const { types: t } = babel;
    return {
        name: "babel-plugin-replace-console-log",
        visitor: {
            CallExpression(path) {
                // path.get => callee's path
                const callee = path.get("callee");
                const isConsole =
                    callee.node.type === "MemberExpression" &&
                    callee.node.object.name === "console";
                if (isConsole) {
                    // replace `console.log` with `log`
                    const originalArguments = path.node.arguments;
                    path.replaceWith(t.CallExpression(t.Identifier("log"), originalArguments));
                }
            }
        }
    };
};
