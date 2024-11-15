import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

// Using 'filess.io' for free database host
// for this test i will not use .env
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'o5-bu.h.filess.io',
      port: 3307,
      username: 'shipeeziFrontDB_wateritper',
      password: '1dde7927051cc3146323c528657519acd2a35415',
      database: 'shipeeziFrontDB_wateritper',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
