const LogStatergy = require('./logStatergy');
const {log} = require('./config.json');

class Logger {

    constructor(statergy = 'toConsole') {
        this.logs = [];
        this.statergy = LogStatergy['noDate'];
    }

    get count() {
        return this.logs.length
    }

    changeStatergy(name) {
        this.statergy = LogStatergy[name];
    }

    log(message) {
        const timestamp = new Date().toISOString()
        this.logs.push({ message, timestamp })
        this.statergy(timestamp, message)
    }

}

module.exports = new Logger(log.statergy);
