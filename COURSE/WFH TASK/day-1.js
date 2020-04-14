const tripleTrouble = (one, two, three) => {
  // Buatlah sebuah function yang menerima 3 string 
  // dan setiap string memiliki panjang yang sama
  // Input: "aa", "bb", "cc"
  // Output: "abcabc"

  // Input: "ab", "cd", "ef"
  // Output: "acebdf"
  let result = ""
  for (let i = 0; i < one.length; i++) {
    result += `${one[i]}${two[i]}${three[i]}`
  }
  return result
}
console.log(tripleTrouble("ab", "cd", "ef"))
console.log(tripleTrouble('aa','bb','cc'))


const altCaps = (string) => {
  // Buatlah sebuah function yang menerima sebuah string
  // Outputnya sebuah array yang index pertama adalah semua 
  // huruf yg posisinya ganjil menjadi kapital, index kedua
  // semua huruf yg posisinya genap jadi kapital

  // Input: "abcdef"
  // Output: ["AbCdEf", "aBcDeF"]
  let indexSatu = ''
  let indexDua = ''
  for (i=0; i<string.length; i++){
      if (i%2 == 0){
          indexSatu = indexSatu + string[i].toUpperCase()
          indexSatu = indexSatu + string[i].toLowerCase()
      } else {
          indexDua = indexDua + string[i].toUpperCase()
          indexDua = indexDua + string[i].toLowerCase()
      }
  }
  return [indexSatu,indexDua]
  }
console.log(altCaps('abcdef'))
