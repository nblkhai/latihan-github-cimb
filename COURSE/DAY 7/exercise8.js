let input = 0

    function convNumb (string){
        for (let i=0; i<string.length; i++){
            input += i+1
        } return(input)  
    }
    let arrAlphabet = 'abcdefghij'.split('')

    console.log(convNumb(arrAlphabet))
