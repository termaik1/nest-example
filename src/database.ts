import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { resolve } from 'path';

import 'dotenv/config';

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_USER,
      entities: [resolve(__dirname, './**/*.model.js')],
      migrations: [resolve(__dirname, './migrations/**/*.ts')],

      subscribers: [
        resolve(__dirname, 'subscriber/**/*.ts'),
        resolve(__dirname, 'dist/subscriber/**/.js'),
      ],

      cli: {
        entitiesDir: 'src',
        migrationsDir: './migrations',
        subscribersDir: './subscriber',
      },
      synchronize: true,
    };
  }
}
