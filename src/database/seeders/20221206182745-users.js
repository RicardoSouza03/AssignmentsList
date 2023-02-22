'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users', 
    [{
      id: 1,
      name: 'John Doe',
      email: 'jhonDoe@gmail.com',
      password: '$2a$10$aj0ImWkHWHX058hdJbX7r.YuxQ/eFqCsmnhngFk9A//P2SBjybQha'
      // senha real: jhonDoePassword
    },
    {
      id: 2,
      name: 'Richard Jonson',
      email: 'richardJonson@gmail.com',
      password: '$2a$10$tTb.5oL/haEuc9ZyDBgDROp2CIasOVDw9diuPdq2UE.FM9i1n7wUK'
      // senha real: richardJonsonPassword
    },
    {
      id: 3,
      name: 'Rachel Katerine',
      email: 'rachelKaterine@gmail.com',
      password: '$2a$10$t1WZjAH09jymAHG/aLf4NeA/ApytOMTlfL1tLynz.o4mLLrnatglq'
      // senha real: rachelKaterinePassword
    },
    ], { timestamps: false });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
