const express = require('express');
const employeeController = require('../controller/employeeController');

const router = express.Router();
router.get('/', employeeController.getAllEmployee);
router.get('/:id', employeeController.getOneEmployee);
router.post('/', employeeController.addEmployee);

module.exports = router;