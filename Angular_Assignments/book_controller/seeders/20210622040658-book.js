'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Books',[{
      bookName: 'Harry Potter',
      authorName:'Robert Wilson'
    },
    {
      bookName:"Heeran",
      authorName:"Rohan"
    }
    ],{});
    
    
  },

  down: async (queryInterface, Sequelize) => {

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */


  }
};