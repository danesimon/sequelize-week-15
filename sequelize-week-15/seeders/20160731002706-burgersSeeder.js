'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('burgers', [{
            burger_name: 'BACON BACON BURGER',
            devoured: false
        },
        {
          burger_name: 'OM NOM NOM BURGER',
          devoured:false
        },
        {
          burger_name: '7 MEAT BURGER',
          devoured:false
        }], {});
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
        return queryInterface.bulkDelete('burgers', null, {});

    }
};
