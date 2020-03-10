for (let i = 1 ; i <= 20 ; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log(i + 'FIZBUZZ')
        break // buat berhentiin program ketika ketemu fizzbuzz yang pertama
        // break ditulis setelah console
    } else if (i%3 == 0) {
            console.log(i + 'fizz')
        } else if(i%5 == 0) {
            console.log(i + 'buzz')

        } else {
            console.log(i)
        }
    }
