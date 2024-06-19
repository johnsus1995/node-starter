import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
import { Exam } from "./Exam";

export interface QuestionAttributes {
  id: number;
  examId: number;
  question: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface QuestionInput extends Optional<QuestionAttributes, "id"> {}

export class Question
  extends Model<QuestionAttributes, QuestionInput>
  implements QuestionAttributes
{
  public id!: number;
  public examId!: number;
  public question!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    examId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

Exam.hasMany(Question);
Question.belongsTo(Exam, { foreignKey: "id" });