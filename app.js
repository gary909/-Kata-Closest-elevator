function elevator(left, right, call) {
    if (call == right) {
        return 'right';
    } else if (call == left || call == 2 && left == 1 && right == 0 || call == 0 && left == 1 && right == 2) {
        return 'left';
    } else {
        return 'right';
    }
}

console.log(elevator(0, 1, 0)); // 'left'
console.log(elevator(0, 1, 1)); // 'right'
console.log(elevator(0, 1, 2)); // 'right'
console.log(elevator(0, 0, 0)); // 'right'
console.log(elevator(0, 2, 1)); // 'right'
console.log(elevator(0, 0, 1)); // 'right'
console.log(elevator(2, 1, 0)); // 'right'
console.log(elevator(1, 2, 0)); // 'left'
console.log(elevator(0, 2, 1)); // 'right'
console.log(elevator(2, 0, 1)); // 'right'


    // code on! :)
    // if (left == right) {
    //     return 'right';
    // } else if (right == call) {
    //     return 'right';
    // } else if (left == call) {
    //     return 'left';
    // } else if (left > right && left >= call) {
    //     return 'left';
    // } else if (right > left && right >= call) {
    //     return 'right';
    // } else if (left > right && call >= left) {
    //     return 'left';
    // } else if (right > left && call >= right) {
    //     return 'right';
    // }



    // if (left > right && call > right || right > left && call < right || left == call && right != call) {
    //     return 'left';
    // } else {
    //     return 'right';
    // }