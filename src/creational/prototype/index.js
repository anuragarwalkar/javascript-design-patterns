const scout_prototype = require('./scout_prototype');

const alex = scout_prototype.clone();
alex.name = 'Alex';

const eve = scout_prototype.clone();
eve.name = 'Eve Porcello';

console.log( `${alex.name}: ${alex.shoppingList}` );
console.log( `${eve.name}: ${eve.shoppingList}` );
