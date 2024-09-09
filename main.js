
////////////////////////////////TASK1/////////////////////////////////////////////

// var evt = require('events').EventEmitter;
// var emt = new evt;
// emt.on('click', function(){
//     console.log('Subscriber 1');
// });

// emt.addListener('click', function(){
//     console.log('Subscriber 2 like subscriber 1 but another name');
// });

// emt.once('click', function(){
//     console.log('Subscriber 3 works only once ');
// });

// emt.emit('click');
// emt.emit('click');


///////////////////////////////TASK2/////////////////////////////////////////////

// Для работы с событиями, необходимо подключить модуль 'events'
var fileStream = require('./mod.js');
// Создаем объект ридера
var reader = new fileStream.FileStream();
// функция readDataFromFile подключается к файлу, считывает данные и передает в нашу callback функцию
reader.readDataFromFile('file.js', function(responce){
    console.log(responce);
});

reader.writeDataToFile('file.js', function(responce){
    console.log(responce);
});


