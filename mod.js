
var evt = require('events').EventEmitter;


//////////////////CLASSIC/////////////////////////////
class FileStream extends evt {

    // fileName - имя файла
    // callback - функция, которая  вызовется после того как данные будут прочитаны
    readDataFromFile = function(path, callback){
        this.file = path;
        if(typeof callback == 'function'){
            this.on('readData', callback)
        }
        this._read();
    };



    writeDataToFile = function(path, callback){
        this.file = path;
        if(typeof callback == 'function'){
            this.on('writeData', callback)
        }
        this._write();
    };
    
    
    _read = function(){
        console.log('Start to read file...Classic');
        var someDataFromFile = 'File  was read'; 
        this.emit('readData', someDataFromFile);    
        console.log('End to read file');
    }
    _write = function(){
        console.log('Start to write file...Classic');
        var someDataFromFile = 'File  was write'; 
        this.emit('writeData', someDataFromFile);    
        console.log('End to write file');
    }
    
    }
    module.exports.FileStream = FileStream;
    

//////////////////PROTOTYPE/////////////////////////////


// Создаем функцию конструктор, которая будет унаследована от функции EventEmitter
// Объект созданый функцией позволит подключиться к файлу и считать из него данные

// function FileStream(){
//     this._file = "";
// }
// // В прототип ридера записываем объект EventEmitter что бы была возможность генерировать события
// FileStream.prototype = new evt.EventEmitter();

// // fileName - имя файла
// // callback - функция, которая  вызовется после того как данные будут прочитаны
// FileStream.prototype.readDataFromFile = function(path, callback){
//     this.file = path;
//     if(typeof callback == 'function'){
//         this.on('readData', callback)
//     }
//     this._read();
// };

// FileStream.prototype.writeDataToFile = function(path, callback){
//     this.file = path;
//     if(typeof callback == 'function'){
//         this.on('writeData', callback)
//     }
//     this._write();
// };

// FileStream.prototype._read = function(){
//     console.log('Start to read file...Prototype');
//     var someDataFromFile = 'File  was read'; 
//     this.emit('readData', someDataFromFile);    
//     console.log('End to read file');
// }


// FileStream.prototype._write = function(){
//     console.log('Start to write file...Prototype');
//     var someDataFromFile = 'File  was write'; 
//     this.emit('writeData', someDataFromFile);    
//     console.log('End to write file');
// }

// module.exports.FileStream = FileStream;




