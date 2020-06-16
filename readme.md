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
Gets all but the last element of array

```

```