// kalau membuat fuction harus sesuai 
 
// 1 
// function namaFunction (param){
   // console.log(param) 
// }
// namaFunction('sesuatu') // 'Sesuatu' adalah param 

// 2
// function namaFunction(a, b){
  //  console.log(a - b)
// }
// let a = 3
// let b = 5
// namaFunction(a,b) // => hasilnya (-2) | jangan liat variabelnya, tapi liat paramnya 
// namaFunction(b,a) // => hasilnya (2) 

// 3
// function namaFunction(a, b){
   //  return a-b // Return berfungsi untuk mengembalikan apa yang di return
                 // Return a => yang akan dihasilkan adalah (1)
                // Return b => yang akan dihasilkan adalah (2)
    // }
// console.log(namaFunction(1,2 + 5)) //yang akan dihasilkan adalah (-1) karena return a-b| Nama Function akan berubah jika mereturn sesuatu 

// 4 
function namaFunction(a = 5,b = 2){  // ini adalah default parameter, kalau pas di console.log () akan otomatis diisi dengan 5+7 karena sudah dideclare dinamaFunction
    let c = a + b
    return c
}
console.log(namaFunction()) // namun kalau namaFunction diisi (2,3) hasilnya akan 5. jadi declare yang diatas tidak berlaku. karena sudah ditimpa. 
