export default function () {
    return {
        name: "babel-plugin-replace-console-log",
        visitor: {
            CallExpression(path) {
                // path.get => path
                const callee = path.get("callee");
                const isConsole = callee.node.type === 'MemberExpression'
                    && callee.node.object.name === 'console';
                if (isConsole) {
                    // get node
                    const originalArguments = path.node.arguments;
                    path.replaceWith(
                        t.CallExpression(t.Identifier("log"), originalArguments),
                    );
                }
            }
        }
    };
}
