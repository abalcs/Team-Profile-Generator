const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, tel) {
        super(name, id, email);
        this.tel = tel;
    }
    getRole() {
        return 'Manager';
    }
    getTel() {
        return this.tel;
    }
}

module.exports = Manager;