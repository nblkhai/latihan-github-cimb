let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
// console.log ([...arr1,...arr2]) // Untuk menggabungkan arr1 dan arr2 dengan menggunakan spread|| The Result is [1,2,3,4,5,6]
// console.log(1, 2, 3)

let arr3 = arr1
arr1.push('Hello')
// console.log(arr3) // arr1 dipush || The Result is [1,2,3,'Hello']

let mobil1 = {
    tahun: 2000,
    merek: 'Toyota',
    harga: 10000
}
let mobil2 ={...mobil1, jumlahPintu : 4}
console.log(mobil2) // The Result is Tahun 2000, Merek 'Toyota', Harga 10000, Jumlah Pintu 4