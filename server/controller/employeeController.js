const Employee = require('../models/employeeModel');

exports.getAllEmployee = (req, res, next) => {
    Employee.fetchAllEmployee(Employees => {
        res.json(Employees)
    });
};

exports.getOneEmployee = (req, res, next) => {
    const empId = req.params.id;
    Employee.findByEmployeeId(empId, Employees => {
        res.json(Employees)
    });
};

exports.addEmployee = (req, res, next) => {
    const emp_id = req.body.emp_id;
    const fullname = req.body.fullname;
    const addEmployee = new Employee(
        emp_id,
        fullname
    );
    addEmployee.save();
    res.status(200).json({ message: 'Employee Added Successfully' })
};

