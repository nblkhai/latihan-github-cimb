// 1. Function utk hapus huruf vocal
// 2. Function utk sort array string (A-Z dan Z-A)
// 3. Function utk sort array integer (0-9 dan 9-0)
// 4. Function display angka terbesar dalam array. (Gak boleh pake Math.max())
// 5. Function ngefilter string (hanya bisa integer). (Output array isinya hanya bisa number)
// 6. Function untuk hapus huruf awal dan akhir saja 

// 1 
let vocal = 'the brown fox jumps over the lazy dog'
hapus = vocal.replace(/[aiueo]/gi, '')
console.log(hapus)


// 2
  // A-Z
let arrName = ['farras', 'andre', 'bagas', 'thomas', 'virgi']
arrName.sort()
console.log(arrName)

  // Z-A
arrName.reverse() //kalau mau dari Z-A sortnya arrname.sort harus dipake juga. kalau engga cuma balikin posisi aja, bukan sort alphabetic
console.log(arrName)


// 3
  //0-9
let arrNumber = [2,4,5,6,1,0,7]
arrNumber.sort() // SORT CUMA BISA DIPAKE UNTUK 1 DIGIT. KALAU 2 DIGIT DIA AKAN NGURUTIN DARI ANGKA PERTAMA. 
console.log(arrNumber)

  // 9-0
arrNumber.reverse()
console.log(arrNumber)


// 4
let arrNumber = [1 , 4, 2, 5, 3, 8, 9]
let largest= 0

for (i=0; i <= largest; i++){
   if (arrNumber[i] > largest) {
       largest=arrNumber[i]
    }
}
console.log(largest)


// 5
let arrWord = ['B', 3, 'L,', 7, 'A ']
for (let k = 0; k < arrWord.length; k++) {
  if (typeof(arrWord[k]) == 'string') {
  arrWord[k] = ' '
 }

}
console.log(arrWord)



// 6
let arrWord = 'Jakarta'
console.log(arrWord.slice(1, -1))


//TAMBAHAN 1
let arrNumber = [2,4,5,6,1,10,27]
Console.length(arrNumber.sort(function(a,b){ 
  return a-b
}))


// TAMBANAHAN 2 (Bubble Sort)
let arrNumber = [2,4,5,6,1,10,27]
let temp
for (let i = 0; i < arrNumber.length; i++) {
  for (let j = 0; j < arrNumber.length; j++) {
if (arrNumber[j] > arrNumber[j + 1]){
  temp = arr[j]
  arr[j] = arr[j + 1]
  arr[j + 1] = temp
}
  }

}