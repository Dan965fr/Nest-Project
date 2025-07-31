import { Module } from '@nestjs/common';
import { DbService } from './db.service';

@Module({
  providers: [DbService],
  exports: [DbService], // כדי שנוכל להשתמש בו במקומות אחרים
})
export class DatabaseModule {}
