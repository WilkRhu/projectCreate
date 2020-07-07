
exports.up = (knex) => {
    return knex.schema.createTable('products', (t) => {
        t.increments('id').primary();
        t.string('name').notNull();
        t.text('description', 'mediuntext').notNull();
        t.float('price').notNull();
        t.string('category').notNull();
        t.string('stock').notNull();
    })
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable('products');
  };
  