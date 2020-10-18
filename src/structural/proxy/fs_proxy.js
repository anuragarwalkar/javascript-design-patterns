const fs = require('fs');

class FS_PROXY {

    readFile(path, format, callback) {
        if (!path.match(/.md$|.MD$/)) {
            return callback(new Error('Can only read markdown files.'));
        }

        fs.readFile(path, format, (err, data) => {
            if (err) {
               console.log('err:', err);
               return callback(err);
            }

            return callback(null, data);
        })
    }
}

module.exports = FS_PROXY;

