module.exports = function towelSort(matrix) {
    if (typeof matrix === "undefined") return []
    const res = []
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            res.push(matrix[i])
        } else {
            res.push(matrix[i].sort((a, b) => b - a))
        }
    }
    return [].concat(...res)
}

