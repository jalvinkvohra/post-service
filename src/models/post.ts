import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class Post extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare active: boolean;
}

Post.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  { sequelize, paranoid: true }
);

export default Post;
