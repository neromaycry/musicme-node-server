const express = require('express');
const app = express();
const path = require('path');
let color = require('dominant-color');

const fs = require('fs');

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/playlist', (req, res) => {
    let file = __dirname + '/mockdata/playlist.json';
    fs.readFile(file, 'utf-8', (err, data) => {
        // let list = JSON.parse(data).data;
        // console.log(list);
        // list.forEach(element => {
        //     console.log(element);
        //     color(element.coverUrl, (err, color) => {
        //         console.log(color);
        //     });
        // });
        res.send(data);
    });
});

app.get('/music', (req, res) => {

})

app.use(express.static('musicdata'));

app.listen(3000, () => console.log('Server listening on port 3000!'));
