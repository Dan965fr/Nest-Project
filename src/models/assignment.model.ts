import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
import { User } from './user.model';
import { Shift } from './shift.model';

export interface AssignmentAttributes {
  id: number;
  userId: number;
  shiftId: number;
}

export interface AssignmentCreationAttributes extends Optional<AssignmentAttributes, 'id'> {}

export class Assignment extends Model<AssignmentAttributes, AssignmentCreationAttributes> implements AssignmentAttributes {
  public id!: number;
  public userId!: number;
  public shiftId!: number;
}

export function initAssignmentModel(sequelize: Sequelize) {
  Assignment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shiftId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Assignment',
      tableName: 'assignments',
      timestamps: true,
    },
  );
}
