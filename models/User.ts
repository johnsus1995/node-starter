import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
import { Post } from "./Post";
export interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isVerified: boolean | undefined;
  phoneNumber:number;
  scjRegId:string;
  // address1:string;
  // address2?:string;
  // userName:string;
  // profileImage?:string;
  role:string;
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
  public phoneNumber!: number | any;
  public scjRegId!: string | any;
  // public address1!: string;
  // public address2: string;
  // public userName!: string;
  // public profileImage!: string;
  public role!: string;

  
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    scjRegId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // address1: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // address2: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // userName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // profileImage: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    role: {
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

User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId", as: "user" });
