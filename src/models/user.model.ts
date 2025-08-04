import {Model,DataTypes,Optional,Sequelize} from 'sequelize';

export interface UserAttributes {
    id: number;
    username: string;
    email:string;
    password: string;
    role: 'soldier' | 'commander';
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}



export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: 'soldier' | 'commander';
}


export function initUserModel(sequelize: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('soldier', 'commander'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: true,
    },
  );
}