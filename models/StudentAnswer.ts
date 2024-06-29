import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
import { StudentExam } from "./StudentExam";
import { Question } from "./Question";

export interface StudentAnswerAttributes {
  id: number;
  studentExamId: number;
  questionId: number;
  answerText: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface StudentAnswerInput extends Optional<StudentAnswerAttributes, "id"> {}

export class StudentAnswer
  extends Model<StudentAnswerAttributes, StudentAnswerInput>
  implements StudentAnswerAttributes
{
  public id!: number;
  studentExamId: number;
  questionId: number;
  answerText: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

StudentAnswer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    studentExamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "StudentExam", // table name
        key: 'id'
      }
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Question", // table name
        key: 'id'
      }
    },
    answerText: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true,
  }
);

// Define associations
StudentExam.hasMany(StudentAnswer, { foreignKey: "studentExamId" });
Question.hasMany(StudentAnswer, { foreignKey: "studentExamId" });

StudentAnswer.belongsTo(StudentExam, { foreignKey: "questionId" }); //many to one
StudentAnswer.belongsTo(Question, { foreignKey: "questionId" });


/**
 * many instance of the model (StudentAnswer) on which you call belongsTo is 
    associated with one instance of the target model (StudentExam).

    foreignKey: "questionId": This specifies the column in the StudentAnswer 
    table that will hold the reference to the Question table. 
    The questionId column in the StudentAnswer table will store the ID of 
    the related Question
 */