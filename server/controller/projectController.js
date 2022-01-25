const Project = require('../models/projectModel');

exports.getAllProject = (req, res, next) => {
    Project.fetchAllProject(Projects => {
        res.json(Projects)
    });
};

exports.getOneProject = (req, res, next) => {
    const projectId = req.params.id;
    Project.findByProjectId(projectId, Projects => {
        res.json(Projects)
    });
};

exports.addEditProject = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const start_date = req.body.start_date;
    const employee = req.body.employee;
    const updatedProject = new Project(
        id,
        name,
        description,
        start_date,
        employee
    );
    updatedProject.save();
    res.status(200).json({ message: id ? 'Project Updated Successfully' : 'Project Added Successfully' })
};

