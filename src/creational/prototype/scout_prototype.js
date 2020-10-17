const Shopper = require('./Shopper');

const scout = new Shopper('Alex Banks');
scout.addItemToList('camping knife');
scout.addItemToList('tent');
scout.addItemToList('backpack');
scout.addItemToList('map');
scout.addItemToList('slingshot');

module.exports = scout;