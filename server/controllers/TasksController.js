const Task = require('../models/Task');
const knexfile = require('../knexfile');

exports.all = (req, res) => {
    Task.all().then((tasks) => {
        res.json(tasks)
    }).catch(err => console.log(err));
}

exports.store = (req, res) => {
    let task = {};
    console.log(req.body);

    task.description = req.body.description;
    Task.create(task).then((id) => {
        console.log('Task created with id: ', id);
        Task.find(id).then((task) => res.json(task));
    }).catch(err => console.log(err));
}

exports.delete = (req, res) => {
    let id = req.body.id;
    Task.delete(id).then(() => {
        console.log('Task deleted: ', id);
        res.json(id);
    }).catch(err => console.log(err));
}

exports.markAsDone = (req, res) => {
    let id = req.body.id;
    Task.markAsDone(id).then((task) => {
        console.log('Task marked as done: ', task);
        Task.find(id).then((task) => res.json(task));
    }).catch(err => console.log(err));
}