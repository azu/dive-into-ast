module.exports = function() {
    return {
        name: "babel-plugin-no-console",
        visitor: {
            CallExpression(path) {
                // path.get => callee's path
                const callee = path.get("callee");
                const isConsole =
                    callee.node.type === "MemberExpression" &&
                    callee.node.object.name === "console";
                if (isConsole) {
                    return path.remove();
                }
            }
        }
    };
};
