import { DataTypes, Model, Optional } from "sequelize";
import sequelize from ".";
export interface PostAttributes {
  id: number;
  title: string;
  description: string;
  userId: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface PostInput extends Optional<PostAttributes, "id"> {}

export class Post
  extends Model<PostAttributes, PostInput>
  implements PostAttributes
{
  public id!: number;
  public title!: string;
  public description!: string;
  public userId: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Post.init(
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
    userId: {
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

// User.hasMany(Post);
// Post.belongsTo(User, { foreignKey: "userId" });
