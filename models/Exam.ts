import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
import { User } from "./User";
export interface ExamAttributes {
  id: number;
  title: string;
  description: string;
  adminId: number;
  deadline: string;
  status: string;
  score: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface ExamInput extends Optional<ExamAttributes, "id"> {}

export class Exam
  extends Model<ExamAttributes, ExamInput>
  implements ExamAttributes
{
  public id!: number;
  public title!: string;
  public description!: string;
  public adminId: number;
  public deadline: string;
  public status: string;
  public score: number | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Exam.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true,
    freezeTableName: true,
  }
);

Exam.belongsTo(User);
User.hasMany(Exam);

// Cascade delete answers when an exam is deleted
// Exam.hasMany(Answer, { foreignKey: "examId", onDelete: 'CASCADE' });
// Exam.hasMany(Question, { foreignKey: "examId", onDelete: 'CASCADE' });
