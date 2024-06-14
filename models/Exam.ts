import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
import { User } from "./User";

export interface ExamAttributes {
  id: number;
  title: string;
  description: string;
  adminId: number;
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
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true,
  }
);

User.hasMany(Exam);
Exam.belongsTo(User, { foreignKey: "userId" });
