class User {
    constructor(name) {
        // BEGIN (write your solution here)
        this.option = 'user'
        // END
        this.name = name;
    }

    getName() {
        return this.name;
    }

    // BEGIN (write your solution here)
    getOption() {
        return this.option
    }

    // END
}

export default User;
