const isConsole = (path) => {
    const callee = path.get('callee');
    return callee.node.type === 'MemberExpression'
        && callee.node.object.name === 'console';

};
module.exports = function () {
    return {
        name: "babel-plugin-no-console",
        visitor: {
            CallExpression(path) {
                if (isConsole(path)) {
                    return path.remove();
                }
            }
        }
    };
};
