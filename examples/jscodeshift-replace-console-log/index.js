module.exports = function (fileInfo, api) {
    return api.jscodeshift(fileInfo.source)
        .find("CallExpression")
        .filter(path => {
            // babel's path
            const callee = path.get("callee");
            return callee.node.type === 'MemberExpression'
                && callee.node.object.name === 'console';
        })
        .replaceWith(path => {
            const t = api.jscodeshift;
            const originalArguments = path.node.arguments;
            return t.callExpression(t.identifier("log"), originalArguments);
        })
        .toSource();
};
