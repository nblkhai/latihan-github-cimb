// const newString = (str) =>{
    
//     str = str.split('')
//     let result = []
//     for (i=0; i<str.length; i++){
//         result += `${str[i].toUpperCase()}`
//         for(j=0; j<i; j++){
//             result += str[i]
//         }
//         result += `-`
//     }
//     result =result.slice(0, -1);
//     return result
// }
// console.log(newString('hello'))

const altCaps = (string) => {
    // Buatlah sebuah function yang menerima sebuah string
    // Outputnya sebuah array yang index pertama adalah semua
    // huruf yg posisinya ganjil menjadi kapital, index kedua
    // semua huruf yg posisinya genap jadi kapital
  ​
    // Input: "abcdef"
    // Output: ["AbCdEf", "aBcDeF"]
  ​
    outputIndexPertama = ''
    outputIndexKedua = ''
    let i
    for (i = 0; i < string.length; i++) {
      if (i % 2 == 0) {
        outputIndexPertama = outputIndexPertama + string[i].toUpperCase()
        outputIndexKedua = outputIndexKedua + string[i].toLowerCase()
      } else {
        outputIndexPertama = outputIndexPertama + string[i].toLowerCase()
        outputIndexKedua = outputIndexKedua + string[i].toUpperCase()
  ​
      }
    }
    return [outputIndexPertama, outputIndexKedua]
  }
  ​
console.log(altCaps('abcdef'))
