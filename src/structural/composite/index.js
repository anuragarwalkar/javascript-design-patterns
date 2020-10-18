const CatalogItem = require('./CatalogItem');
const CatalogGroup = require('./catalogGroup');

const boots = new CatalogItem("Leather Boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("California work boots", 19.99);

const group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops])

const group_food = new CatalogGroup("Food for while you try on cloths", [
    new CatalogItem('Milkshake', 5.99),
    new CatalogItem('French Fries', 7.99)
])

group_shoes.print();
group_food.print();

