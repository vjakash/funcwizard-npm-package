//ConCat
let concat = (a, b, c) => {
    let result = [...a, ...b, ...c];
    return result;
};
// console.log("***********(1.ConCat)********************");
module.exports.concat = concat;

//Chunk
let chunk = (a, b) => {
    let result = [];
    let temp = [];
    let count = 0;
    a.forEach((item, index, arr) => {
        count++;
        if (index == arr.length - 1) {
            temp.push(item);
            result.push(temp);
        } else if (count == b) {
            temp.push(item);
            result.push(temp);
            temp = [];
            count = 0;
        } else {
            temp.push(item);
        }
    });
    return result;
};
// console.log("***********(2.Chunk)********************");
module.exports.chunk = chunk;

//initial
let initial = (a) => {
    let arr = a.filter((item, index, arr) => {
        // console.log(item, index, arr.length - 1);
        // console.log(index != Array.length - 1);
        return index != Array.length - 1;
    });
    return arr;
};
// console.log("***********(3.Initial)********************");
module.exports.initial = initial;

/*indexof
_.indexOf([1, 2, 1, 2], 2);
 => 1
 
 Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2,3], 2, 3);
 => 3*/
let indexof = (a, b, f = 0) => {
    if (f > 0) {
        for (let i = 0; i < f; i++) {
            a[i] = -1;
        }
    }
    return a.indexOf(b);
};
// console.log("***********(4.indexOF)********************");
module.exports.concat = concat;

/*join
_.join(['a', 'b', 'c'], '~');
 => 'a~b~c'*/
let join = (a, b) => {
    let result = a.reduce((acc, item, index = 0, arr) => {
        //   console.log(acc,item,index,arr);
        if (index != arr.length - 1) {
            return acc + String(item) + b;
        } else {
            return acc + String(item);
        }
    }, "");
    return String(result);
};
// console.log("***********(5.join)********************");
module.exports.concat = concat;

/*last
_.last([1, 2, 3]);
 => 3*/
let last = (arr) => {
    return arr[arr.length - 1];
};
// console.log("***********(6.last)********************");
module.exports.concat = concat;

/*nth
var array = ['a', 'b', 'c', 'd'];
_.nth(array, 1);
 => 'b'
_.nth(array, -2);
=> 'c';*/
let nth = (arr, ind) => {
    if (ind < 0) {
        return arr[arr.length - Math.abs(Number(ind))];
    } else {
        return arr[Number(ind)];
    }
};
// console.log("***********(7.nth)********************");
module.exports.concat = concat;

/*sum
_.sum([4, 2, 8, 6]);
 => 20*/
let sum = (arr) => {
    let result = arr.reduce((acc, item) => {
        return Number(acc) + Number(item);
    });
    return result;
};
// console.log("***********(8.sum)********************");
module.exports.concat = concat;

/*min
_.min([4, 2, 8, 6]);
=> 2
_.min([]);
=> undefined*/
let min = (arr) => {
        let result = arr.reduce((acc, item) => {
            if (acc > item) { acc = item; }
            return acc;
        }, arr[0]);
        return result;
    }
    // console.log("***********(9.min)********************");

module.exports.concat = concat;

/*max
_.max([4, 2, 8, 6]);
 => 8
_.max([]);
 => undefined*/
let max = (arr) => {
        let result = arr.reduce((acc, item) => {
            if (acc < item) { acc = item; }
            return acc;
        }, arr[0]);
        return result;
    }
    // console.log("***********(10.max)********************");
module.exports.concat = concat;

/*size
_.size([1, 2, 3]);
 => 3 
_.size({ 'a': 1, 'b': 2 });
 => 2
_.size('pebbles');
 => 7*/
let size = (inp) => {
        if (typeof(inp == "Object")) {
            return Object.keys(Object(inp)).length;
        } else {
            return String(inp).length;
        }
    }
    // console.log("***********(11.Size)********************");
module.exports.size = size;