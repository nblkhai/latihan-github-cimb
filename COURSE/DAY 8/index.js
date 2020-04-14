// // function alphaValue (param1, param2){
// //     return param1 + param2
// // }

// // const alphaValue = (param1, param2) => param1 + param2 // Kalau satu baris berarti return
// // const alphaValue = (param1, param2) => param1 == param2 // boolean 

// // 1
const alphaValue = (str) => {
    str = str.split('')
    let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let result = 0

    for (let i = 0; i < str.length; i++){
        result += (alpArray.indexOf(str[i])+1)

    }
    return result 
}
console.log(alphaValue('abc'))

// // 2
// // const alphaValue = (str) => {
// //     let alpArray = 'abcde'.split('')
// //     let result = 0
// //     for (let i = 0; i < str.length; i+= 2){
// //                  result += (alpArray.indexOf(str.charAt(i))+1)
// // }
// //     }
// //     return result


// // console.log(alphaValue('abcde'))

// // 3
// // const alphaValue = (str) => {
// //   let alpArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
// // let result = ''
// // for (let i = 0; i < str.length; i++){
// //      result += (alpArray.indexOf(str[i])+1)
    
// // }
// //  return result 
// // }
// //  console.log(alphaValue('xyz'))
    

// // 4 
// class Product {
//     constructor(paramNama, paramHarga, paramStock) {
//       this.nama = paramNama;
//       this.harga = paramHarga;
//       this.stock = paramStock;
//     }
// }
// let arrItems = 
//     [
//       new Product("Jeruk", 10000, 10),
//       new Product("Mangga", 12000, 10),
//       new Product("Apel", 15000, 10),
//       new Product("Semangka", 1000, 10),
//       new Product("Manggis", 12000, 10),
//       new Product("Melon", 170000, 10)
//     ]
//     // FILTER SEARCH PRODUCT NAME 
//     const searchProductName = str => {
//         return arrItems.filter((value) =>value.nama.toLowerCase().includes(str.toLowerCase())) // . filter adalah sebuah method yang menerima 1 parameter. parameter tsb harus sebuah function

// }
// // FILTER SEARCH PRODUCT PRICE 
// const searchProductPrice = (min, max) => {
//     return arrItems.filter((value) => value.harga >= min && value.harga <= max)
// }
// // console.log(searchProductName('mang')) // ini buat cari kata yang ada 'mang' (Mangga, Semangka,Manggis)
// // console.log(searchProductName('el')) // ini buat cari kata yang ada 'el' (apel,melon)
// // console.log(searchProductPrice(10000,20000)) // ini buat cari harga product dari 10.000 s.d 20.000

// // OBJECT DISTRUCTURING
// // 1
// // let a ={
// //     nama : "Bella",
// //     asal : "Jakarta"
// // }
// // let {nama, asal} = a
// // console.log(nama)

// // 2
// // let a ={
// //     nama : "Bella",
// //     asal : "Jakarta",
// //     kontak:{
// //         rumah: "Jagakarsa",
// //         kota: "Jakarta"
// //     }
// // }
// // let {nama, asal, kontak : {rumah,kota}} = a
// // console.log(kota)

// // 3
// // let a ={
// //     nama : "Bella",
// //     asal : "Jakarta",
// //     kontak:{
// //         rumah: "Jagakarsa",
// //         kota: "Jakarta"
// //     }
// // }
// // let {nama, asal, kontak : {rumah,kota}} = a
// // const tampilNama = ({nama, asal}) => {
// //     return nama
// // }
// // tampilNama(a)

// // 4 
// arr = [-7, 5, 2, -2, 1, -13]

// const sumFN = (arr) => {
//     let positives = 0
//     let negatives = 0
//     arr.forEach(element => {
//         if(element >= 0){
//             positives += element
//         }else {
//             negatives += element
//         }
        
//     });
//     return [positives, negatives]
// }
// console.log(sumFN([1,2,3,-3,-2,-1]))