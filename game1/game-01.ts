let list : number[] = [2, 5, 8, 14, 0, 4, 6 , 7, 1, 10, 11, 12, 13, 15, 16, 17, 20, 22, 45, 68, -1, 40, 22, 66, 41];

function subSet(m, n){
    let numbers : number[];
    for (let i = 0; i < m.length; i++){
        let a = n - m[i];
        if (numbers.includes(a)) {
            return [m[i], a]
        }
        numbers.push(m[i]);
    }
    return 'cannot find a subset'  
}
console.log(subSet(list, 107));

