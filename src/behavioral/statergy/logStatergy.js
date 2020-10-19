const path = require('path');
const { appendFile } = require('fs');

class LogStatergy {

    static noDate(timestamp, message) {
        console.log('message:', message)
    }

    static toFile(timestamp, message) {
        const fileName = path.join(__dirname, 'logs.txt');
        appendFile(fileName, `${timestamp}-${message} \n`, (err) => {
            if (err) {
                console.log('err:', err)
            }
        })
    }

    static toConsole(timestamp, message) {
        console.log('timestamp:', `${timestamp}-${message}`);
    }

    static none() {

    }
}

module.exports = LogStatergy;