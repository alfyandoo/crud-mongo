const akses = require('express').Router();
const TodosModel = require('./model.js');

akses.route("/").get((req, res) => {
    TodosModel.find()
        .then((todos) => res.status(200).json(todos))
        .catch((error) => res.status(400).json(error.message));
});

akses.route("/delete/:id").delete((req, res) => {
    TodosModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('Activity deleted!'))
        .catch((error) => res.status(400).json(error.message));
});

akses.route("/update/:id").put((req, res) => {
    TodosModel.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedBook) => res.status(200).json(updatedBook))
        .catch((error) => res.status(400).json(error.message));
});

akses.route("/add").post((req, res) => {
    TodosModel.create(req.body)
        .then((createdBook) => res.status(200).json(createdBook))
        .then((error) => res.status(400).json(error.message));
});

module.exports = akses;