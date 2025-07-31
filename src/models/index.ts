import { Sequelize } from 'sequelize';
import { User, initUserModel } from './user.model';
import { Shift, initShiftModel } from './shift.model';
import { Assignment, initAssignmentModel } from './assignment.model';

export function initModels(sequelize: Sequelize) {
  initUserModel(sequelize);
  initShiftModel(sequelize);
  initAssignmentModel(sequelize);

  // Associations
  User.hasMany(Assignment, { foreignKey: 'userId' });
  Assignment.belongsTo(User, { foreignKey: 'userId' });

  Shift.hasMany(Assignment, { foreignKey: 'shiftId' });
  Assignment.belongsTo(Shift, { foreignKey: 'shiftId' });
}
