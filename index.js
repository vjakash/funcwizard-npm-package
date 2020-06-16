//ConCat
let concat = (...args) => {
    let result = [];
    for (let i of args) {
        result.push(...i);
    }
    // let result = [...a, ...b, ...c];
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
module.exports.indexof = indexof;

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
module.exports.join = join;

/*last
_.last([1, 2, 3]);
 => 3*/
let last = (arr) => {
    return arr[arr.length - 1];
};
// console.log("***********(6.last)********************");
module.exports.last = last;

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
module.exports.nth = nth;

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
module.exports.sum = sum;

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

module.exports.min = min;

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
module.exports.max = max;

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

let deepcopy = (inp) => {
    return JSON.parse(JSON.stringify(inp));
}
module.exports.deepcopy = deepcopy;

let dropright = (inp, num = 1) => {
    let input = [...inp];
    if (num >= input.length) {
        return [];
    }
    input.splice(input.length - num, num);
    return input;
}
module.exports.dropright = dropright;

let dropleft = (inp, num = 1) => {
    let input = [...inp];
    if (num >= input.length) {
        return [];
    }
    input.splice(0, num);
    return input;
}
module.exports.dropleft = dropleft;

let dropboth = (inp, num = 1) => {
    let input = [...inp];
    if (num * 2 >= input.length) {
        return [];
    }
    input.splice(0, num);
    input.splice(input.length - num, num);
    return input;
}
module.exports.dropboth = dropboth;