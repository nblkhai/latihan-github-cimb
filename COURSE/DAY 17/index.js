// 1
// let arr = []
// for (let i =0; i< 5;i++){
//     arr.push(parseInt(Math.random()*10))
// }
// console.log(arr)

// let newArr = arr.map((val,idx)=> {
// return val + 1
// })
// console.log(newArr)

// 2
// const repMap = (array,cb) => {
//     let result = []
//     for (let i =0; i< array.length;i++){
//         result.push(cb(array[i],i,array))
//     }  
//     return result
// }
// console.log(repMap([1,2,3,4,5],(val,idx,array) => {
//     return 3
// }))

// 3
// let newArr = arr.filter((val,idx,array) => {
// if (val <= 5){
//     return true
// }else {
//     return false
// }
// })
// console.log(newArr)

// 4 Digital Root 
let b
let c
let e
const digitalRoot = () => {
    let a = ''
    if (a.length == 2) {
        b = parseInt(a[0]) + parseInt(a[1])
        return a
    } else if (a.length > 2) {
        let e = 0
        for(let i=0;i<a.length;i++){
            e += parseInt(z[i])
        }
return e
    }
}
console.log(digitalRoot(6352))