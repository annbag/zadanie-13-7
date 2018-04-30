var fs = require('fs');

fs.readdir('./', 'utf-8', function(err, files) {
    console.log('Pliki katalogu z zadania-13-7')
    console.log(files);
    fs.writeFile('./lista.txt','\n'+files, function(err) {
        console.log('zapisano w pliku lista.txt' );
        });
});