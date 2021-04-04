import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';

import { resolve } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [resolve(__dirname, './**/*.entity.js')],
      migrations: [resolve(__dirname, './migrations/**/*.ts')],

      subscribers: [
        resolve(__dirname, 'subscriber/**/*.ts'),
        resolve(__dirname, './../dist/subscriber/**/.js'),
      ],

      cli: {
        entitiesDir: 'src',
        migrationsDir: 'migrations',
        subscribersDir: 'subscriber',
      },
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
