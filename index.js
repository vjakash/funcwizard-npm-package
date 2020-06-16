//ConCat
let concat = (a, b, c) => {
    let result = [...a, ...b, ...c];
    return result;
};
let arr = [1];
let op = concat(arr, [3], [
    [4]
]);
console.log("***********(1.ConCat)********************");
console.log(op);
modules.exports.concat = concat;

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
let out = chunk(["a", "b", "c", "d"], 2);
console.log("***********(2.Chunk)********************");
console.log(out);
modules.exports.chunk = chunk;

//initial
let initial = (a) => {
    let arr = a.filter((item, index, arr) => {
        console.log(item, index, arr.length - 1);
        console.log(index != Array.length - 1);
        return index != Array.length - 1;
    });
    return arr;
};
let output = initial([1, 2, 3]);
console.log("***********(3.Initial)********************");
console.log(output);
modules.exports.initial = initial;

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
let res = indexof([1, 2, 1, 2], 2, 2);
console.log("***********(4.indexOF)********************");
console.log(res);
modules.exports.concat = concat;

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
let r1 = join(["a", "b", "c"], "~");
console.log("***********(5.join)********************");
console.log(r1);
modules.exports.concat = concat;

/*last
_.last([1, 2, 3]);
 => 3*/
let last = (arr) => {
    return arr[arr.length - 1];
};
let r2 = last([1, 2, 3]);
console.log("***********(6.last)********************");
console.log(r2);
modules.exports.concat = concat;

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
let array = ["a", "b", "c", "d"];
let r3 = nth(array, 1);
console.log("***********(7.nth)********************");
console.log(r3);
r3 = nth(array, -2);
console.log(r3);
modules.exports.concat = concat;

/*sum
_.sum([4, 2, 8, 6]);
 => 20*/
let sum = (arr) => {
    let result = arr.reduce((acc, item) => {
        return Number(acc) + Number(item);
    });
    return result;
};
let r4 = sum([4, 2, 8, 6]);
console.log("***********(8.sum)********************");
console.log(r4);
modules.exports.concat = concat;

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
let r5 = min([4, 2, 1, 8, 6]);
console.log("***********(9.min)********************");
console.log(r5);
r5 = min([]);
console.log(r5);
modules.exports.concat = concat;

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
let r6 = max([4, 2, 8, 6]);
console.log("***********(10.max)********************");
console.log(r6);
r6 = max([]);
console.log(r6);
modules.exports.concat = concat;

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
let r7 = size([1, 2, 3]);
console.log("***********(11.Size)********************");
console.log(r7);
r7 = size({ 'a': 1, 'b': 2 });
console.log(r7);
r7 = size('pebbles');
console.log(r7);

modules.exports.size = size;