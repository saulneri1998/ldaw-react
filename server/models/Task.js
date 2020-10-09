const knex = require('../database/connection');

exports.PENDING = 'pending';

exports.all = () => {
    return knex
        .select('*')
        .from('tasks')
        .orderBy('status', 'desc')
        .orderBy('description', 'asc');
}

exports.create = (task) => {
    return knex('tasks')
        .insert({ description: task.description });
}

exports.find = (id) => {
    return knex
        .select('*')
        .from('tasks')
        .where('id', id)
        .first();
}

exports.delete = (id) => {
    return knex
        .select('*')
        .from('tasks')
        .where('id', id)
        .first()
        .del();
}

exports.markAsDone = (id) => {
    return knex('tasks')
        .where('id', id)
        .update('status', 'done');

}