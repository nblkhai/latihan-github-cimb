function hitungKata (kata){
    let hasilObj = {}
    let spiltKata = kata.split(' ')

    for (let word of spiltKata){
        word = word.toLowerCas()
        if(hasilObj[word]){
            hasilObj[word] += 1
        } else{
            hasilObj[word] = 1
        }
    }
    let maxKey;
    let max = 0

    for (const key in hasilObj){
        if(hasilObj[key] > max){
            max = hasilObj[key]
            maxKey = max
        }
    }
    return maxKey + ' ' + hasilObj[maxKey]
}

