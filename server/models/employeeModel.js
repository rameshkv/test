const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(__dirname),
    'data',
    'employee.json'
);

const getEmployeeFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log(err)
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Employee {
    constructor(emp_id, fullname) {
        this.emp_id = emp_id;
        this.fullname = fullname;
    }

    save() {
        getEmployeeFromFile(Employees => {
                Employees.push(this);
                fs.writeFile(p, JSON.stringify(Employees), err => {
                    console.log(err);
                });
        });
    }

    static fetchAllEmployee(cb) {
        getEmployeeFromFile(cb);
    }

    static findByEmployeeId(id, cb) {
        getEmployeeFromFile(Employees => {
            const Employee = Employees.find(e => e.emp_id === id);
            cb(Employee);
        });
    }
};