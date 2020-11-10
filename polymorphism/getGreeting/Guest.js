class Guest {
    constructor() {
        // BEGIN (write your solution here)
        this.option = 'guest';
        // END
        this.name = 'Guest';
    }

    getName() {
        return this.name;
    }

    // BEGIN (write your solution here)
    getOption() {
        return this.option;
    }

    // END
}

export default Guest;