class Conductor {

    constructor() {
        this.history = [];
        this.undone = [];
    }

    run(command) {
        console.log(`Executing command: ${command.name}`);
        command.execute();
        this.history.push(command);
    }

    printHistory() {
        this.history.forEach(command => console.log(command.name));
    }

    undo() {
        const command = this.history.pop();
        command.undo();
        this.undone.push(command);
    }

    redo() {
        const command = this.undone.pop();
        command.execute();
    }
}

module.exports = new Conductor();