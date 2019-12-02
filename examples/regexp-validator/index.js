module.exports.noEval = code => {
    const pattern = /eval\(.*?\)/g;
    const errors = [];
    let match = null;
    while ((match = pattern.exec(code))) {
        errors.push({
            text: code.slice(match.index, pattern.lastIndex),
            range: [match.index, pattern.lastIndex]
        });
    }
    return {
        ok: errors.length === 0,
        errors
    };
};
