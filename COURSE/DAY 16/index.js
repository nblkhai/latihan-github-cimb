// Spread Operator ==> untuk membuka {} 
// 1
let a = {
    nama: 'Nama',
    tahun: '2020',
    pekerjaan: 'Developer'
}
// let b = a
// a.umur = '30'
// console.log(b) // The result is nama: 'Nama', tahun: '2020', pekerjaan: 'Developer', umur: '30' => karena a dan b mempunyai alamat yang sama 

// 2 
// let b = {
//     ...a
// }
// a.umur = '30'
// console.log(b) // The result is nama: 'Nama', tahun: '2020', pekerjaan: 'Developer' => karena a dan b memiliki alamat yang berbeda 

// 3 
// let b = {
//     ...a,
//     pekerjaan: 'CTO'
// }
// console.log(b) // The result is nama: 'Nama', tahun: '2020', pekerjaan: 'CTO' => Pekerjaan akan berubah menjadi CTO, walaupun di a pekerjaan adalah developer 

// 4 
// let arr1 = [
//     'Naruto',
//     'Doraemon'
// ]
// let arr2 = [
//     2000,
//     3000
// ]
// let arr3 = [
//     ...arr1,
//     ...arr2
// ]
// console.log(arr3) // The Result is Naruto, Doraemon, 2000,3000

// 5 
let b = {
    username:'Bella',
    email:'blabla@yahoo.com',
    password:'123456789'
}

let defaultVal ={
    username: '',
    email:'',
    password:''
}
const onChangeText = (key,value) => {
    defaultVal ={
        ...defaultVal,
        [key]:value
    }
}
onChangeText('username','nabila')
// console.log(defaultVal) // The Result is { username: 'nabila', email: '', password: '' }

let testing = 'foo'
// defaultVal[testing]='lalala'
//console.log(defaultVal) // The Result is { username: 'nabila', email: '', password: '', foo: 'lalala' }

defaultVal.testing='lalala'
console.log(defaultVal) // The Result is {username: 'nabila',email: '',password: '', testing: 'lalala'}


let result = [];
const arrTriangle = (length) => {
    for (let i = 1; i <= length; i++) {
        for (let j = 1; j <= i; j++) {
            
        result += j;
        }
        console.log('' + result);
    }
}
console.log(arrTriangle(5))