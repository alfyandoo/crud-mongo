const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TodosSchema = new Schema(
    {
        activity: { type: String, required: true },
        completed: { type: Boolean, required: true },
    },
    {
        collection: 'todos'
    }
);

module.exports = mongoose.model('TodosModel', TodosSchema);