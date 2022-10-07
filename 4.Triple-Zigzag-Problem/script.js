// Triple ZigZag Problem
solution = (arr) => {
    const result = []
    const length = arr.length - 2;

    for (let i = 0; i < length; i++) {
        if (
            (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2])
            ||
            (arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2])
        ) {
            result.push(1);
        }
        else {
            result.push(0);
        }
    }
    return result;
}


const numbers = [1, 2, 1, 3, 4]                                     // [ 1, 1, 0 ]
// const numbers = [1000000000, 1000000000, 1000000000]             //  [ 0 ]
// const numbers = [1, 2, 3, 4]                                     // [0,0,0]

const output = solution(numbers);
console.log("Output : ", output);