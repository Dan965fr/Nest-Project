
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize';


@Injectable()
export class DbService implements OnModuleInit, OnModuleDestroy {
  public sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(process.env.POSTGRES_CONNECTION || '', {
      dialect: 'postgres',
      pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      logging: false, // כדי שלא יציף לוגים
    });
  }

  async onModuleInit() {
    try {
      await this.sequelize.authenticate();
      console.log(' Database connected');
    } catch (error) {
      console.error(' Database connection failed:', error);
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.sequelize.close();
  }

  getSequelize(): Sequelize {
    return this.sequelize;
  }

  async syncDatabase(force = false) {
    try{
        await this.sequelize.sync({force});
        console.log('Database synced')
    }catch(error){
        console.error('Database synced fail');
        throw error;
    }
  }
    
}
