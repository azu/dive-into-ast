module.exports = {
    create: context => {
        return {
            "CallExpression > Identifier[name=eval]"(node) {
                context.report({
                    message: "Don't use eval",
                    node
                });
            }
        };
    }
};
