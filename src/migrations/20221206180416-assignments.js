'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('assignments', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      userId: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      description: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    }, {
      timestamps: false,
      underscored: true,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('assignments');
  }
};
