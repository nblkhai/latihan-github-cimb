// 1
var letters = 'abcdefghijklmnopqrstuvsxyz'
const caesarCipher = (word, num) => {
//     let result = ''

//     for (let i=0; i<word.length; i++){
//        result += letters[(letters.indexOf(word.charAt(i)) + num)].toString()
//     }
//    return result
// }
// console.log(caesarCipher('bella', 2)) // The Result is 'dgnnc' karena move 2 alphabetic

// 1B

// let splitWord = word.split('')
// let arrAlp = letters.split('')
// let hasil =''
// for (let i=0; i<word.length; i++){ // Untuk splitWord
//   while (num > 26){
//     num -= 26
//   }
//   hasil += arrAlp[arrAlp.indexOf(splitWord[i])+num]
// }
// return hasil
 }
// console.log(caesarCipher('abc',28))




// 2
const plusMinus = (numArr) => {
//     let result    = 0 
//     for(i=0; i<numArr.length; i+=1){
//       if(i == 0){
//           result = numArr[i] 
//       } else if(i%2 == 0){
//           result -= numArr[i] 
//       }
//       else{
//           result += numArr[i]
//       }
//     }
//     return result
//   }
// console.log(plusMinus([5,2,2,4])) // The Result is 9 [5+2-2+4]

// 2B
let result = numArr[0]
let operator = 'tambah'

for (let i=0; i<numArr.length; i++){
  if (operator == 'tambah'){
    result = result + numArr[i]
    operator = 'kurang'
  } else if (operator == 'kurang'){
    result = result - numArr[i]
    operator = 'tambah'
  }
}
return result
}
console.log(plusMinus[1,2,3,4])

  // 3
//   const isPalindrome = (str) => {
//     if(str.replace(' ','').toLowerCase() == str.replace(' ','').toLowerCase().split('').reverse().join('')){

//     return true
// } else{
//     return false
// }
// }
// console.log(isPalindrome('Mickey Mouse')) // The Result is False, karena mickey mouse bukan termasuk Palindrome
// console.log(isPalindrome('Kasur Rusak')) // The Result is True

