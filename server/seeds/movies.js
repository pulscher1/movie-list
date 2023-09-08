/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    await knex('movies').del()
    await knex('movies').insert([
        { id: 1, Title: 'Mean Girls' },
        { id: 2, Title: 'Hackers' },
        { id: 3, Title: 'The Grey' },
        { id: 4, Title: 'Sunshine' },
        { id: 5, Title: 'Ex Machina' }
    ]);
};