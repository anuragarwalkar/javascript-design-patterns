const Shopper = require('./Shopper');
const Employee = require('./Employee');

module.exports = (name, money = 0, type, employer) => {
    if(type === 'employee') {
        return new Employee(name, money, employer);
    } else {
        return new Shopper(name, money);
    }
}