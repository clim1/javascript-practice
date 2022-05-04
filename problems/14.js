/**
 * Problem 14: Majority Element
 *
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 *
 * @example [3,2,3] -> 3
 */
function problem(numbers) {
    const maj = numbers.length / 2;
    let vals = {};
    for (let i = 0; i < numbers.length; i++) {
        vals[numbers[i]] = vals[numbers[i]] + 1 || 1;
        if (vals[numbers[i]] > maj);
        {
            return numbers[i];
        }
    }
    return null;
}

const tests = [
    [[3, 2, 3], 3],
    [[2, 2, 1, 1, 3, 2, 2], 2],
];

module.exports = { problem, tests };
