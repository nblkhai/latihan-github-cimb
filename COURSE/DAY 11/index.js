// CALLBACK FUNCTION 
// 1
// const validator = (arr, cb) => {
// let arrResult = []
// for(let i = 0; i < arr.length; i++){
//     if(cb(arr[i])){
//         arrResult[i]
//     } else{
//         arrResult[i] = 0
//     }
// }
// return arrResult
// }

// let arrParam = [3,4,6,1,6,7]
// arrParam =[1,2,3,4]

// console.log(validator(arrParam, (val)=> {
//     return val + 1 
// }))

// 2
const validator = (arr, cb) => {
    let arrResult = []
    for(let i = 0; i < arr.length; i++){
        arrResult[i] = cb(arr[i])
    }
    return arrResult
    }
    // console.log(validator([1,2,3,4], (val) =>{
    //     return val + 2 // The Result is [3,4,5,6]
    // }))
    console.log(validator([1,2,3,4], (val) =>{
        return val * 2 // The Result is [2,4,6,8]
    }))