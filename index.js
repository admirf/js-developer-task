function check(arr) {
    if (! Array.isArray(arr))
        throw 'Not an array'

    let result = null;

    for (let i = 0; i < arr.length - 1; ++i) {
        let next;

        if (arr[i + 1] > arr[i])
            next = 'increasing';
        else if (arr[i + 1] < arr[i])
            next = 'decreasing';
        else
            return 'neither';

        if (result !== null && result !== next) {
            return 'neither';
        }

        result = next;
    }

    return result || 'neither';
}

console.log(check([1, 2]));
console.log(check([1, 2, 3]));
console.log(check([3, 2, 1]));
console.log(check([1, 2, 1]));
console.log(check([1, 1, 2]));
console.log(check([1]));
console.log(check([]));
console.log(check([2, 5, 8, 12, 21]));
console.log(check([5, -1, -4, -9]));
console.log(check([1, 2, 3, 1, 5]));

