# What is this
This package provide functions to simplify development process

#Installation#

`npm i funcwizard`

# Importing 

`const funcwizard=require('funcwizard');`

# Available Functions

#### concat 
``` 
let arr=[4]
let result =funcwizard.concat([1,2,3],arr,[5])//result will be [1,2,3,4,5]
```

#### chunk

``` 
let result =funcwizard.chunk(['a', 'b', 'c', 'd'], 3)//result will be [["a", "b", "c"], ["d"]]
let result =funcwizard.chunk(['a', 'b', 'c', 'd'], 2)//result will be [["a", "b"], ["c", "d"]]

```

#### initial
Gets all but the first element of array

```
let result =funcwizard.initial(['s','w', 'b', 'c', 'd','e'])//result will be ["w", "b", "c", "d", "e"]

```
#### indexof
Find the index of the given number and also give optional parameter to specify from where the search should start.
```
let result =funcwizard.indexof([1,0,2, 1, 2], 2) //result will be 2
let result =funcwizard.indexof([1,0,2, 1, 2], 2,3) //result will be 4
```

#### join
Gets an array and joins then with any string inbetween each element of the array and returns a string.
```
let result =funcwizard.join([1,0,2, 1, 2], "~") //result will be "1~0~2~1~2"
let result =funcwizard.join(['a', 'b', 'c'], "&") //result will be "a&b&c"

```

#### last
Returns the last element of the array
```
let result =funcwizard.last([1, 2, 3,4]) //result will be 4
```

#### nth
Returns the element in the given position
##### options
*positive position-returns from the start
*negatice position-returns from the end
```
let array = ['a', 'b', 'c', 'd'];
let result =funcwizard.nth(array, 1) //result will be 'b'
let result1 =funcwizard.nth(array, -1) //result will be 'd'

```
#### sum
Returns the sum of the array
```
let result=funcwizard.sum([1,2,3]); //result will be 6
```

#### min
Returns the minimum value in an array
```
let result=funcwizard.min([4, 2, 8, 6]); //result will be 2
let result=funcwizard.min([]); //result will be 'undefined'
```
#### max
Returns the maximum value in an array

```
let result=funcwizard.max([4, 2, 8, 6]); //result will be 8
let result=funcwizard.max([]); //result will be 'undefined'
```

#### size
Returns the size of object,array and string.
```
let result=funcwizard.size([1, 2, 3]); //result will be 3
let result=funcwizard.size({ 'a': 1, 'b': 2 }); //result will be 2
let result=funcwizard.size('pebbles'); //result will be 7

```

#### deepcopy
Copy an object by value for nested objects and not by reference with this function
```
let result=funcwizard.deepcopy({ 'a': 1, 'b': {'c':2} }); //result contained copy of the object without same reference.
```