import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
import { Exam } from "./Exam";

export interface QuestionAttributes {
  questionId: number;
  examId: number;
  question: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface QuestionInput
  extends Optional<QuestionAttributes, "questionId"> {}

export class Question
  extends Model<QuestionAttributes, QuestionInput>
  implements QuestionAttributes
{
  public questionId!: number;
  public examId!: number;
  public question!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}


Question.init(
  {
    questionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    examId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Exam, // 'Exams' would also work
        key: 'id'
      }
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true,
  }
);

Exam.hasMany(Question, { foreignKey: "examId" }); //one to many
Question.belongsTo(Exam, { foreignKey: "examId" }); //many to one