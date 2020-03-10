// kita punya file karyawan nama, umur dan pekerjaan 
// jumlah orang ada 5 
// tampilkan nama, umur dan pekerjaan setiap orang 
// tamabahin nomor telpon, tapi oorang ketiga dan kelima punya 2 nomor telpon 

// let arrNamaKaryawan = ['bella', 'zalva', 'yuna', 'marsha', 'catya']
// let arrUmurKaryawan = [22, 23, 24, 25, 26]
// let arrPekerjaanKaryawan = ['sekretaris', 'bendahara', 'ketua', 'kepala divisi', 'wakil ketua']
// let arrNomorTelponKaryawan = [['08099'], ['08022'], ['08092', '08021'], ['08024'], ['08087', '08077']]
// let stringNomorTelponKaryawan = ''
// for (let i = 0; i<arrUmurKaryawan.length; i++){
    // stringNomorTelponKaryawan = ''
    // for(let j= 0; j< arrNomorTelponKaryawan[i].length; j++){
       // stringNomorTelponKaryawan += `${arrNomorTelponKaryawan[i][j]}`
   //  }
    // console.log(arrNamaKaryawan[i],arrUmurKaryawan[i],arrPekerjaanKaryawan[i], stringNomorTelponKaryawan)
// }


// let arrData = [['bella', 'zalva', 'yuna'], [22, 23, 24], ['sekretaris', 'bendahara', 'ketua']]
// let stringData = ''
// for (let i = 0; i < arrData.length; i++){
// stringData = ''
// for(let j= 0; j < arrData[i].length; j++){
// stringData += `${arrData[j][i]} `
// }
// console.log(stringData)
// }

// let arrData =[
   // ['bella', 'zalva', 'yuna'],
   // [22, 23, 24],
   // ['sekretaris', 'bendahara', 'ketua']
// ]
// let result
// for (let i = 0; i < arrData.length; i++){
// result = ''
// for(let j= 0; j < arrData[i].length; j++){ 
// result += arrData[i][j] + ' '
// }
// }
// console.log(arrData[i][i])

//OBJECT 
// let mobil = {
    // warna: 'Merah', // warna = key ; merah = value 
    // tahun: '2018',
    // merek: 'Honda'
// }
// mobil.tipe = 'Sedan' // menambahkan key yang kurang, ini juga berlaku untuk mengganti isi 
// mobil.warna= 'Biru' // diatas udah ada warna, kalau kita ganti key yang udah ada maka akan ditimpa, yang muncul adalah key yang baru 
// console.log(mobil) // nampilin seluruh key dan value | ini nama aksesnya adalah dot notation
// console.log(mobil.tahun) // cuma nampilin tahun 
// console.log(mobil) 
// console.log(mobil['merek']) // ini fungsinya sama kaya dot notation 

// CONTOH OBJECT LAGI 
let karyawan ={
    nama: 'seto',
    umur: 37,
    pekerjaan: 'Developer',
    contactDetails: {
        alamat: 'GOP 9',
        nomorTelfon: ['081234', '084321']
    }
    
}
console.log(karyawan.contactDetails.alamat) // untuk mengetahuin alamat 
