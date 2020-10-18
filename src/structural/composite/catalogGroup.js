class CatalogGroup {

    constructor(name, composits = []) {
        this.name = name;
        this.composits = composits;
    }

    get total() {
        return this.composits.reduce((acc, next) => acc + next.total, 0)
    }

    print() {
        console.log(`\n${this.name.toUpperCase()}`);
        this.composits.forEach(composit => composit.print());
    }
}

module.exports = CatalogGroup;