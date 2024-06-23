import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
import { User } from "./User";
import { Exam } from "./Exam";

export interface StudentExamAttributes {
  id: number;
  studentId: number;
  examId: number;
  startTime: Date;
  endTime: Date;
  submitted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface StudentExamInput extends Optional<StudentExamAttributes, "id"> {}

export class StudentExam
  extends Model<StudentExamAttributes, StudentExamInput>
  implements StudentExamAttributes
{
  public id!: number;
  public studentId!: number;
  public examId!: number;
  public startTime!: Date;
  public endTime!: Date;
  public submitted!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

StudentExam.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User', // table name
        key: 'id'
      }
    },
    examId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Exam', // table name
        key: 'id'
      }
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    submitted: {
      type: DataTypes.BOOLEAN,
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
User.hasMany(StudentExam, { foreignKey: "studentId" });
Exam.hasMany(StudentExam, { foreignKey: "examId" });

StudentExam.belongsTo(User, { foreignKey: "studentId" });
StudentExam.belongsTo(Exam, { foreignKey: "examId" });
