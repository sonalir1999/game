var fs = require('fs');

//// create file with below methods
fs.appendFile('new_file.tex','hwllo !!!!!!!!!!', function (err){
    if (err) throw err;
    console.log('success1');

});

fs.open('newFile2.txt', 'w', function(err, file){
    if (err) throw err;
    console.log('file created2');
}
);

fs.writeFile('newFile3', 'hello content', function(err){
    if (err) throw err;
    console.log('success3');
});


//// update file with below methods

fs.appendFile('newFile2.txt','<br>' + 'gggg', function(err){
    if (err) throw err;
    console.log('done4');
});             

// silly you can use fs.writeFile methos to write file

//// delete file
fs.unlink('newFile', function(err){
    if (err) throw err;
    console.log('sucess5');
});



/// file open parameter
// fs.open(path, flags, mode, callback)
// flag values = r, r+, rs, rs+, w, wx, w+, wx+, a, ax, a+, ax+


