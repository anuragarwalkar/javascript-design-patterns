// const Logger = require('./Logger');
const logger = require('./Logger');

// const logger = new Logger().getInstance(); One way of creating new object

class Store {

    constructor(name, inventory=[]) {
        this.name = name;
        this.inventory = inventory;
        logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
    }

}

module.exports = Store;
