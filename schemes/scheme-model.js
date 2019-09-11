const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes').then(schemes => {
        return schemes;
    });
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .then(scheme => {
            return scheme;
        });
}

function findSteps(id) {
    return db('steps')
        .join('schemes', 'schemes.id', '=', 'steps.scheme_id')
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where({ 'steps.scheme_id': id })
        .then(steps => {
            return steps;
        });
}

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(scheme => {
            return scheme;
        });
}

function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes)
        .then(scheme => {
            return scheme;
        });
}

function remove(id) {
    return db('schemes')
        .where({ id })
        .del()
        .then(scheme => {
            return scheme;
        });
}
