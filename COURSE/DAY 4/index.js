// PELAJARIN METHODS
// .slice; .splice; .map; .filter; .reduce; .indexOf; .sort

// let arr = ['Jeruk', 'Mangga', 'Apel'] // kalau pakai JS tidak perlu di declare berapa panjangnya dan isi data typenya
// console.log (arr.length) // akan mengembalikan number

// let text = 'abcdefghij'
// console.log(text.slice(2, 5)) // kita menginput parameter
// slice berfungsi untuk memotong index, yang diambil dari 2-5 
// kalau length mulai dari 1, kalau ada spasi diitung juga 

// let text = 'abcdefghij\n'
// console.log(text.trim()) // trim  berfungsi untuk menghapus white space

// arr.push('Doraemon') // push berfungsi untuk menambahkan element kedalam array | data typenya push = number
// kalau dicek lengthnya, akan nambah jadi 3 
// akan mengembalikan number, namun setelah dipush

// console.log(arr[1]) // kalau di cek, yang muncul adalah 'mangga' aja , karena yang dihitung indexnya

// arr[2] = 'Harry potter' // ini akan mengubah index ke 2, apel diganti menjadi harry potter
// arr[3] = 'hello' // kalau ini menambahkan index baru

// arr[arr.length] = 'hello' // mau sepanjang apapun array, yang akan ditambah pasti diujung 

// console.log(arr)

// menghitung array 
// cara 1
// let arrNumbers = [3, 7, 6, 9, 5]
// let panjang = arrNumbers.length 
// result = 0

// for(i=0; i < panjang; i++){ // kenapa pake <, karena index < length 
    // result += arrNumbers[i]
// }
// console.log(result)

// cara 2 
// let arrNumbers = [3, 7, 6, 9, 5]

// arrNumbers.forEach(function(val){
    // result += val
// })

// cara 3
// let arrNumbers = [3, 7, 6, 9, 5]
// for (let i of arrNumbers) {
   // console.log(i)
// }

// cara 4
// let arrNumbers = [3, 7, 6, 9, 5]
// console.log(arrNumbers.reduce{(a,b) => a + b})

// let string = 'abcdefghij'
// console.log(string.split('')) // memecah sebuah string menjadi array. ini memecah perkarakter

// let string = 'the quick brown fox'
// console.log(string.split(' '))// memcah a=sebuah string menjadi array, ini memecah perkata 

// mencari index 'tulisan'
// cara 1 
// let arrBaru =['Text', 'String', 'Tulisan', 'Doraemon']
// for(i=0; i <= arrBaru.length; i++){
   // if (arrBaru[i]=='Tulisan'){
       // console.log('Tulisan berada diindex', i)
        //break;
   // }

// }

// cara 2
// let arrBaru =['Text', 'String', 'Tulisan', 'Doraemon']
// console.log(arrBaru.indexOf(2))


