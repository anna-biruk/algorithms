class Singleton {
    constructor(name) {
        this.name = name
    }

    name = null
    static instance = null;


    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton('Singleton #1')
        }
        return Singleton.instance;
    }
}

const clientCode = () => {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();