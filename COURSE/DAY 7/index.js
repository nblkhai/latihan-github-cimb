// 1
// function testing (){
   // return{
       //  tahun: 2000,
       //  nama: 'Doraemon',
       //  kontak:{
       //  rumah: 'jalan',
      //   telfon: [081234, 084321]
     //   }
  //  }
// }
// console.log(testing().kontak.telfon[0])//Berfungsi untuk memanggil indeks ke-0 dari telfon || Result = 81234, 0 tidak terbaca karena data typenya bukan string

//2 
// function tambah (a,b){
  //  return a+b
// }
// console.log(tambah(3, 7))

// let orang = {
//     nama: 'Bella',
//     tahunLahir:'1997',
//     asal:'Padang'
// }
// let developer ={
//     nama: 'Bella',
//     tahunLahir:'1997',
//     asal:'Padang',
//     speciality: 'Front End Web',
//     pengalaman: '7 Tahun'
// }
// let artis ={
//     nama: 'Bella',
//     tahunLahir:'1997',
//     asal:'Padang',
//     onGoingFilm:'Avengers',
//     jumlahFilm: 3
// }

// CLASS adalah cetakan untuk mebuat object 

class Person{ // kalau nulis class diawali dengan huruf kapital || kalau variabel, kata ke-2 huruf besar
constructor(paramNama, paramTahunLahir, paramAsal){ // sifat constructor sama kaya function
    this.nama = paramNama // yang kiri nama propertynya. yang kanan dari si constructur
    this.tahunLahir = paramTahunLahir
    this.asal = paramAsal
} 
} 
class Developer extends Person{ // Jadi, developer adalah turunannya Person. Class yang ada di Person akan ada di Developer
constructor(nama, tahunLahir, asal, paramSpecialty, paramPengalaman){
super(nama, tahunLahir, asal) 
this.specialty = paramSpecialty
this.pengalaman = paramPengalaman
}
}
class Product {
    constructor(name, price, stock){
        this.name = name
        this.price = price,
        this.stock = stock,
        this.qty = 0
    }
}
class Clothing extends Product{
    constructor(name, price, stock, size){
        super(name, price,stock)
        this.size = size
    }
}
let a = new Person('Bella', '1997', 'Padang')
let b = new Developer('Bella', '1997', 'Padang', 'Full stack Web', '7 Tahun')

console.log(b)

// PR
// lanjutkan yang kemarin 
// pas masuk ke menu user adalah pilihan barang yang mau dibeli (clothing, HP, Buah)
// clothing : size (s,m,l) user tidak bisa milih size 
// hp : waranty (true or false) tampilin alert kalau udh gaada waranty | kasih confirm mau tetep beli/engga 
// buah : exp date (dd/mm/yyyy) tampilin alert kalau buah udh exp| hint new Date()
// menu admin untuk hapus barang di ketik nama barangnya 


 // how to use method split,sort, join 