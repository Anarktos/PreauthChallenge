let numbers : number[] = [2, 5, 8, 14, 0, 4, 6 , 7, 1, 10, 11, 12, 13, 15, 16, 17];

function subSet(m, n) {
    let list = m;
    let i = 1;
    let a = 0;
    for (i; i < list.length; i++) {
        if ((list[a] + list[i]) === n) return [list[a], list[i]];
    }
    list.shift();
    if (list.length > 1) return subSet(list, n);
    else return 'cannot find a subset';
}

console.log(subSet(numbers, 30));

