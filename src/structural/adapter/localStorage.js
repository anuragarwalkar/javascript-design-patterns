const { writeFile, existsSync, readFileSync, unlink } = require('fs');
const { threadId } = require('worker_threads');

class LocalStorage {

    constructor() {
        if(existsSync('localStorage.json')) {
            const txt = readFileSync('localStorage.json')
            this.items = JSON.parse(txt);
        } else {
            this.items = {};
        }
    }

    get length () {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key, value) {
        this.items[key] = value;
        console.log('this.items:', this.items)
        writeFile('localStorage.json', JSON.stringify(this.items), (err) => {
            if (err) {
                console.log('err:', err)
            }
        })
    }

    clear() {
        this.items = {};
        unlink('localStorage.json', (res) => {
            console.log('removed')
        })
    }
}

module.exports = new LocalStorage()