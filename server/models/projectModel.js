const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(__dirname),
    'data',
    'project.json'
);

const getProjectFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            console.log(err)
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Project {
    constructor(id, name, description, start_date, employee) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.start_date = start_date;
        this.employee = (employee.length>0)?employee:[];
    }

    save() {
        getProjectFromFile(Projects => {
            if (this.id) {
                const existingProjectIndex = Projects.findIndex(
                    p => p.id == this.id
                );
                const updatedProjects = [...Projects];
                updatedProjects[existingProjectIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedProjects), err => {
                    console.log(err);
                });
            } else {
                this.id = Math.floor(Math.random()*(999-100+1)+100);
                Projects.push(this);
                fs.writeFile(p, JSON.stringify(Projects), err => {
                    console.log(err);
                });
            }
        });
    }

    static fetchAllProject(cb) {
        getProjectFromFile(cb);
    }

    static findByProjectId(id, cb) {
        getProjectFromFile(Projects => {
            const Project = Projects.find(p => p.id == id);
            cb(Project);
        });
    }
};