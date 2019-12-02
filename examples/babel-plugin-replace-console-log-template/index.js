module.exports = babel => {
    const { template } = babel;
    return {
        name: "babel-plugin-replace-console-log",
        visitor: {
            CallExpression(path) {
                const isConsole = path.get('callee')
                    .matchesPattern('console.log');
                if (isConsole) {
                    const build = template(`log(ARGUMENT)`);
                    const ast = build({
                        ARGUMENT: path.node.arguments,
                    });
                    path.replaceWith(ast);
                }
            }
        }
    };
};
