// 1
var letters = 'abcdefghijklmnopqrstuvsxyz'
const caesarCipher = (word, num) => {
    let result = ''

    for (let i=0; i<word.length; i++){
       result += letters[(letters.indexOf(word.charAt(i)) + num)].toString()
    }
   return result
}
console.log(caesarCipher('bella', 2)) // The Result is 'dgnnc' karena move 2 alphabetic

// 2
const plusMinus = (numArr) => {
    let result    = 0 
    for(i=0; i<numArr.length; i+=1){
      if(i == 0){
          result = numArr[i] 
      } else if(i%2 == 0){
          result -= numArr[i] 
      }
      else{
          result += numArr[i]
      }
    }
    return result
  }
console.log(plusMinus([5,2,2,4])) // The Result is 9 [5+2-2+4]

  // 3
  const isPalindrome = (str) => {if(str.replace(' ','').toLowerCase() == str.replace(' ','').toLowerCase().split('').reverse().join('')){

    return true
} else{
    return false
}
}
console.log(isPalindrome('Mickey Mouse')) // The Result is False, karena mickey mouse bukan termasuk Palindrome
console.log(isPalindrome('Kasur Rusak')) // The Result is True

