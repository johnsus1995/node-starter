import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
import { User } from "./User";

export interface RoleAttributes {
  id: number;
  role: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface RoleInput
  extends Optional<RoleAttributes, "id"> {}

export class Role
  extends Model<RoleAttributes, RoleInput>
  implements RoleAttributes
{
  public id!: number;
  public role!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}


Role.init(
  {
    id: {
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
    freezeTableName:true,
  }
);

Role.hasMany(User,{foreignKey:'roleId'})