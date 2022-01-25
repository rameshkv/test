const express = require('express');
const projectController = require('../controller/projectController');

const router = express.Router();
router.get('/', projectController.getAllProject);
router.get('/:id', projectController.getOneProject);
router.post('/', projectController.addEditProject);
router.put('/', projectController.addEditProject);

module.exports = router;