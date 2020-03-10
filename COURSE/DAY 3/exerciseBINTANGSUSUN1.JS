let result = ''
for (let i = 0 ; i < 5 ; i++) {  
    result+= '*'
    for (let j = 0 ; j < 5 ; j++){
        if(j == 1){
            break
        } 
        result+= '*'
    }
    result+="\n"
}
        console.log(result)
