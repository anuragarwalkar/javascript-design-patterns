const Shopper = require('./Shopper');
const { 
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem
} = require('./InventoryItem');

const alex = new Shopper('Alex', 3000);

const walkman = new InventoryItem("Walkman", 29.99);
const necklace = new InventoryItem("Necklace", 9.99);

const gold_neclace = new GoldenInventoryItem(necklace);
const diamond_gold_neclace = new DiamondInventoryItem(gold_neclace);

const diamond_walkman = new DiamondInventoryItem(walkman);

alex.purchase(diamond_gold_neclace);
alex.purchase(diamond_walkman);

alex.printStatus();
