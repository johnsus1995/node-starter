import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
import { User } from "./User";

export interface RoleAttributes {
  roleId: number;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface QuestionInput
  extends Optional<RoleAttributes, "roleId"> {}

export class Role
  extends Model<RoleAttributes, QuestionInput>
  implements RoleAttributes
{
  public roleId!: number;
  public role!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}


Role.init(
  {
    roleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
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

Role.belongsTo(User, { foreignKey: "roleId" });