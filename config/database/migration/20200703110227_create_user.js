exports.up = (knex) => {

    return knex.schema.createTable('users', (t) => {
        t.uuid('id').unique().notNull().primary().defaultTo(knex.raw('uuid_generate_v4()'));
        t.string('name').notNull();
        t.string('email').unique().notNull();
        t.string('password', 250).notNull();
        t.string('token');
        t.timestamp("create_at").defaultTo(knex.fn.now());
        t.timestamp("updated_at").defaultTo(knex.fn.now());
    })

};

exports.down = (knex) => {
    return knex.schema.dropTable('users');
};