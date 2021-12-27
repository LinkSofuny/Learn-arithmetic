/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let reg = /\s?\b(\w*)\s*$/g
    return reg.exec(s)[1].length
};