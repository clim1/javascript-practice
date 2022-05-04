/**
 * Problem 10: Strings
 *
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase.
 * If the string has odd length, the middle character should be lowercase.
 *
 * @example "abcdef" -> "ABCdef"
 */
function problem(str) {
    const midPoint = str.length / 2;
    return str.substring(0, midPoint).toUpperCase() + str.substring(midPoint).toLowerCase();
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"],
];

module.exports = { problem, tests };
