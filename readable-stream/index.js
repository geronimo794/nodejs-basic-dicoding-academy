const fs = require('fs');
const path = require('path');
const fileDir = path.resolve(__dirname, 'article.txt');

const readableStream = fs.createReadStream(fileDir, {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});
