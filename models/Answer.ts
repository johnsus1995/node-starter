import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
import { Exam } from "./Exam";
import { Question } from "./Question";

export interface AnswerAttributes {
  id: number;
  examId: number;
  questionId: number;
  answer: string;
  // points: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface AnswerInput extends Optional<AnswerAttributes, "id"> {}

export class Answer
  extends Model<AnswerAttributes, AnswerInput>
  implements AnswerAttributes
{
  public id!: number;
  public examId: number;
  public questionId: number;
  public answer: string;
  // public points: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    examId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Exam,
        key: "id",
      },
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Question,
        key: "id",
      },
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // points: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true,
    freezeTableName: true,
  }
);

Answer.belongsTo(Exam);
Answer.belongsTo(Question);
