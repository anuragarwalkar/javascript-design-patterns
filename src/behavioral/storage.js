const defaultDeliveryTime = 0;

class Storage {
    constructor(name, inventory = [], deliveryTime = defaultDeliveryTime) {
        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;

        this.next = null;
    }

    lookInLocalInventory(itemName) {
        return this.inventory.find((item) => item.name === itemName);
    }

    setNext(storage) {
        this.next = storage;
    }

    find(itemName) {
        const found = this.lookInLocalInventory(itemName)
        if (found) {
            return {
                name: found.name,
                qty: found.qty,
                location: this.name,
                deliveryTime: (this.deliveryTime === defaultDeliveryTime) ? 'now' : `${this.deliveryTime} day(s)`
            }
        } else if (this.next) {
            return this.next.find(itemName);
        } else {
            return `we do not carry ${itemName}`
        }
    }
}

module.exports = Storage;