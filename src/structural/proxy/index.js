const path = require('path');
const FS_PROXY = require('./fs_proxy');
const fs = new FS_PROXY();

const txtFile = path.join(__dirname, 'Readme.txt');
const mdFile = path.join(__dirname, 'Readme.md');

const result = (error, contents) => {

    if (error) {
        console.log('\x07');
        console.log(error);
        process.exit(0);
    }

    console.log('reading file...');
    console.log(contents);

}

// fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
