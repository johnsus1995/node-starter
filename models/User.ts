import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
import { Exam } from "./Exam";
export interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isVerified: boolean | undefined;
  phoneNumber: number;
  scjRegId: string;
  roleId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface UserInput
  extends Optional<UserAttributes, "id" | "isVerified"> {}

export class User
  extends Model<UserAttributes, UserInput>
  implements UserAttributes
{
  public id!: number;
  public firstName: string;
  public lastName: string;
  public email!: string;
  public password!: string;
  public isVerified: boolean | any;
  public phoneNumber!: number;
  public scjRegId!: string | any;
  public roleId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    scjRegId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true,
    freezeTableName: true,
  }
);