import { Model, DataTypes, Optional, Sequelize } from 'sequelize';

export interface ShiftAttributes {
  id: number;
  startTime: Date;
  endTime: Date;
  location: string;
}

export interface ShiftCreationAttributes extends Optional<ShiftAttributes, 'id'> {}

export class Shift extends Model<ShiftAttributes, ShiftCreationAttributes> implements ShiftAttributes {
  public id!: number;
  public startTime!: Date;
  public endTime!: Date;
  public location!: string;
}

export function initShiftModel(sequelize: Sequelize) {
  Shift.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Shift',
      tableName: 'shifts',
      timestamps: true,
    },
  );
}
