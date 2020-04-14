// 1
let result = []
const arrTriangle = (length) => {
    for (let i = 0; i <length; i++) {
        result[i]=[]
        for (let j = 0; j <= i; j++) {   
            if (j == 0){
                result[i].push(1)
            }else {
                result[i].push(j+1)
            }
 }
    }
    return result
}
console.log(arrTriangle(5))

// 2
const arrGanjil = (length) => {
    let arrHasil= []
    let counter = 1
    for (let i = 0; i <length; i++) {
        let arr =[]
        for (let j = 0; j <i + 1; j++) {   
            arr[j]=counter
            counter += 2
            }
            arrHasil.push(arr)
        }
       return arrHasil
    
    }
console.log(arrGanjil(5))

// 3
const fibonaci = (length) => {
    let arrHasil = []
    for (let i = 0; i <length; i++) {
        let arr = []
        if (i == 0){
            arr = [0]
        } else if (i == 1){
            arr = [i,i]
        }else {
            arr= [...arrHasil[i-1]]
            for (let j = 0; j <i +1; j++) {
                if (j == 0){
                    let a =i-1
                    arr[j]=arr[a]+arr[a-1]
                }else if (j == 1){
                    arr[j]=arr[j]+arr[j-1]
                }else {
                    arr[j]=arr[j-2]+arr[j-1]
                }

            }

        }
        arrHasil.push(arr)
        
    }
    return arrHasil
    
}
console.log(fibonaci(5))

// 4 
const pascal=(length) =>{
    let pascalTriangle = []
    for (let i = 0; i <length; i++) {
        pascalTriangle[i] = new Array(i+1);
        for (let j = 0; j < i+1; j++) {            
            if (j === 0 || j === i) {
              pascalTriangle[i][j] = 1;
            } else {
              pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
            }
          }
        }
        
        return pascalTriangle;
      }
      
      console.log(pascal(6));