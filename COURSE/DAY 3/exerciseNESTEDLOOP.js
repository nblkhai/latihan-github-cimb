let result = ''
for (let i = 0 ; i < 5 ; i++) { // i = 1 hasil = '*****\n' ini juga sebagai penambah spasi 
    
    for (let j = 0 ; j < 5 ; j++){ // j = 4 hasil = '*****\*****' ini juga sebagai penambah kesamping
    // kenapa bintangnya ada 4, karena melihat conditon dari j
        result+= '*'
    }
    result += '\n'
}
        console.log(result) //console log pasti kebawah, jadi harus tambah variabel biar bisa kekanan dulu


