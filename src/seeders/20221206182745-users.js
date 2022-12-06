'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', 
    [{
      id: 1,
      name: 'John Doe',
      email: 'jhonDoe@gmail.com',
      password: 'jhonDoePassword'
    },
    {
      id: 2,
      name: 'Richard Jonson',
      email: 'richardJonson@gmail.com',
      password: 'richardJonsonPassword'
    },
    {
      id: 3,
      name: 'Rachel Katerine',
      email: 'rachelKaterine@gmail.com',
      password: 'rachelKaterinePassword'
    },
    ], { timestamps: false });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
