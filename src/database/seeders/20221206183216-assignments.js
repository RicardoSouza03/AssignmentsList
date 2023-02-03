'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('assignments', 
    [
      {
        id: 1,
        user_id: 1,
        description: 'Go to the supermarket',
        created: new Date('2022-12-01T19:57:00.000Z'),
        updated: new Date('2022-12-01T19:57:00.000Z'),
      },
      {
        id: 2,
        user_id: 1,
        description: 'buy 4 boxes of milk and cereal',
        created: new Date('2022-12-01T20:01:00.000Z'),
        updated: new Date('2022-12-01T20:01:00.000Z'),
      },
      {
        id: 3,
        user_id: 3,
        description: 'Watch one episode of The office',
        created: new Date('2022-12-02T06:12:00.000Z'),
        updated: new Date('2022-12-02T06:12:00.000Z'),
      },
      {
        id: 4,
        user_id: 2,
        description: 'Buy girlfriends birthday present',
        created: new Date('2022-12-03T19:00:00.000Z'),
        updated: new Date('2022-12-03T19:00:00.000Z'),
      },
    ], { timestamps: false });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('assignments', null, {});
  }
};
