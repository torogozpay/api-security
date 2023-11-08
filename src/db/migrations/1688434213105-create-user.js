/**
 * @param {import('node-pg-migrate').MigrationBuilder} pgm
 */
exports.up = (pgm) => {
  pgm.createTable('users', {
    uuid: {
      type: 'uuid',
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()'),
    },
    email: {
      type: 'text',
      notNull: true,
      check: "email <> ''",
      unique: true,
    },
    cloud_user_id: {
      type: 'text',
      notNull: true,
      check: "cloud_user_id <> ''",
      unique: true,
    },
  });
};
