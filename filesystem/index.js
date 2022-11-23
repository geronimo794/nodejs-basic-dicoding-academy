const fs = require('fs');
const path = require('path');
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
const fileDir = path.resolve(__dirname, 'notes.txt');

fs.readFile(fileDir, 'UTF-8', fileReadCallback);
