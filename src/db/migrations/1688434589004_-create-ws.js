/**
 * @param {import('node-pg-migrate').MigrationBuilder} pgm
 */
exports.up = (pgm) => {
  pgm.createTable('workspaces', {
    uuid: {
      type: 'uuid',
      primaryKey: true,
      default: pgm.func('uuid_generate_v4()'),
    },
    name: {
      type: 'text',
      notNull: true,
      check: "name <> ''",
      unique: true,
    },
    description: {
      type: 'text',
      notNull: true,
      check: "description <> ''",
    },
    owner_uuid: {
      type: 'uuid',
      notNull: true,
      references: 'users',
    },
  });
};
