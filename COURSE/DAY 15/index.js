// 1
// let param1 = 'hello'
// let param2 = 'world'

// const fnBaru = (param2, param1) => { // Declaration
//     return param2 + ' ' + param1 // Program
// }
// console.log(fnBaru(param1,param2)) // Execution
// apapun yang direturn, akan menggantikan posisinya si function!!
// The Result is Hello World

// 2
// let a = 'abc' // Global variable 
// const fnKedua = () => {
//     a = 'cba'
// }
// // fnKedua
// // console.log(a) // The Result is abc

// fnKedua()
// console.log(a) // The result is cba 

// 3
// let arr = [1,2,3,4,5]
// arr.forEach((value,index,array) => { // foreach menerima callback function || urutan sangat berpengaruh, nama tidak berpengaruh

// //  console.log('wawawa') // The Result is wawawa,wawawa,wawawa,wawawa,wawawa karena 5x iterasi(dari let arr) 
// console.log(value,index,array)
// })  
 

// // 4 
// const forEachRep = (array,cb) => {
// for (let i = 0; i<array.length; i++){
//     cb(array[i],i,array)
// }
// }
// // forEachRep(arr,(param1,param2,param3) => { // Param1 = arr[i], param2= i, param3 = arr
// //     console.log(param1,param2,param3)
// // })

// // 5

// // 6 (FOR IN)
// let saya = {
//     nama :'Bella',
//     pekerjaan: 'mahasiswa',
//     status: 'Sehat'
// }

// for (let key in saya){
// console.log(key) // The Result is Nama,Pekerjaan dan Status
// console.log(key,saya[key]) // The result is nama :'Bella',pekerjaan: 'mahasiswa',status: 'Sehat'
// }

// let nama = 'status'
// console.log(saya['status'])  // The Result is Sehat 
//                              // bracket notation menerima sebuah string 
// console.log(saya[nama]) // The Result is Sehat, karena variable nama isinya 'status' 

// console.log(saya.nama) // The result is 'Bella' 

// 7 
// setTimeout(() => {
//     console.log('Hello World')
// }, 3000) // 'Hello World' akan muncul dalam 3s

// 8 
const testInterval =() => {
    setInterval(() => {
        console.log('hello world')
    }, 1000);   
}

// 