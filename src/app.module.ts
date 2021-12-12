import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entity/users.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './app.sqlite',
      entities: [Users],
      synchronize: process.env.NODE_ENV != 'production',
    }),
    UsersModule,
  ],
})
export class AppModule {}
