'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Question', {
      fields: ['examId'],
      type: 'foreign key',
      name: 'fk_question_exam',
      references: {
        table: 'Exam',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Question', 'examId');
  }
};
