const flatten = (input) => {
    // Code here
    
    // 1. input empty => empty
    // 2. input not empty => append the value to the result, flatten the children as restValue,  append restValue into result, => next item
    
    
    if (input.length === 0) {
        return [];
    }
    
    let result = [];
    
    for(let i = 0; i < input.length; i++) {
        result.push({
            value: input[i].value
        });
        
        result = result.concat(flatten(input[i].children));
    }
    
    return result;
};

// getBatch(index)
 
// The function makes a request call to the backend to fetch the data.
// It returns a promise which can be resolved to the same JSON structure as Part 1.

// Mock implementation

const getBatch = (index) => {
    return new Promise((resolve, reject) => {
        if (index === 1) {
            resolve([
                {
                    value: 'value0',
                    children: []
                }
            ]);
        } else if (index === 2) {
            resolve([
                {
                    value: 'value1',
                    children: [
                        {
                            value: 'value2',
                            children: [
                                {
                                    value: 'value3',
                                    children: []   
                                }
                            ]
                        },
                        {
                            value: 'value4',
                            children: []
                        }
                    ]
                },
                {
                    value: 'value5',
                    children: [],
                }
            ]);
        } else if (index === 3) {
            resolve([
                {
                    value: 'value6',
                    children: []
                }
            ]);
        }
    });
};

// Task: Implement getValueList(fromIndex, toIndex) such that it combines successive calls
// to getBatch(index) to produce a Promise containing the result shown below:

const getValueList = (fromIndex, toIndex) => {
    // Code here
    
    // take each index, get result for each of them,
    // merge together
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
    
    const len = toIndex - fromIndex + 1;
    
    return Promise.all(
        
        new Array(len)
            .fill(0)
            .map(
                (num, index) => getBatch(index + fromIndex)
            ))
        .then(values => {
            return values.map(v => flatten(v))
                    .reduce((acc, v) => {
                        return [...acc, ...v];
                    }, [])
        });
};

// // console.log(getValueList(1, 3));

expected = [
    { value: 'value0' },
    { value: 'value1' },
    { value: 'value2' },
    { value: 'value3' },
    { value: 'value4' },
    { value: 'value5' },
    { value: 'value6' }
];

getValueList(1, 3).then(result => {
    console.log("result should match expected: ", JSON.stringify(result) === JSON.stringify(expected))
});

// console.log(flatten([]));
// console.log(flatten([{value:'1', children: []}]));

// console.log(flatten([{value:'1', children: []}]));

// const example = [
//     {
//         value: 'value1',
//         children: [
//             {
//                 value: 'value200',
//                 children: [
//                     {
//                         value: 'value3',
//                         children: []   
//                     }
//                 ]
//             },
//             {
//                 value: 'value4',
//                 children: []
//             }
//         ]
//     },
//     {
//         value: 'value5',
//         children: [],
//     }
// ];

// const result = flatten(example);

// let expected = [
//     { value: 'value1' },
//     { value: 'value200' },
//     { value: 'value3' },
//     { value: 'value4' },
//     { value: 'value5' }
// ];

// console.log("result should match expected: ", JSON.stringify(result) === JSON.stringify(expected))
