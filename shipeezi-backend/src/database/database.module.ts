import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

// Using 'freemysqlhosting.net' for database host
// for this test i will not use .env
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'sql10.freemysqlhosting.net',
      port: 3306,
      username: 'sql10744872',
      password: '7FrvtU4BAk',
      database: 'sql10744872',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
