start()()[2][1].kontak.telfon[0] // Start adalah suatu function 
function start () {
    return function () {
      return [1,2,[
        {
          nama: 'Doraemon',
          pekerjaan: 'Manjain orang'
        },
        {
          nama: 'Seto',
          kontak: {
            rumah: 'BSD',
            telfon: ['081234', '432108']
          }
        }
      ],4,5]
    }
  }
  console.log(start()()[2][1].kontak.telfon[0])