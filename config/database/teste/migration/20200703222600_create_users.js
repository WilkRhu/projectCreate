exports.up = (knex) => {

    return knex.schema.createTable('users', (t) => {
        t.increments('id').primary();
        t.string('name').notNull();
        t.string('email').notNull();
        t.string('password', 250).notNull();
        t.string('token');
        t.timestamp("create_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    })

};

exports.down = (knex) => {
    return knex.schema.dropTable('users');
};