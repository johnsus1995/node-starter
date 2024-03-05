import { DataTypes, Model } from "sequelize";
import sequelize from ".";
export interface PostAttributes {
  id: number;
  title: string;
  description: string;
}

export class Post extends Model<PostAttributes> implements PostAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
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
