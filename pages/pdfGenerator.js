
//Somes variables
let generateBtn = document.getElementById('generate');


function print() {
    printJS({
        printable: 'pdf-cover',
        type: 'html',
        scanStyles: true,
        font: 'roboto',
        honorColor:true,
        targetStyles: ['*']
    })
}

generateBtn.addEventListener('click', print);