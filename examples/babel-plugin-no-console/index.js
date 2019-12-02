module.exports = function () {
    return {
        name: "babel-plugin-no-console",
        visitor: {
            CallExpression(path) {
                // path is wrapper of node + api
                const callee = path.node.callee;
                const isConsole =
                    callee.type === "MemberExpression" &&
                    callee.object.name === "console" &&
                    callee.property.name === "log";
                if (isConsole) {
                    return path.remove();
                }
            }
        }
    };
};
