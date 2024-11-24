// Used only for manual manipulations via the terminal
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

const isProd = process.env.CARS_SERVICE_NODE_ENV === 'production';

export default new DataSource({
  type: 'postgres',
  host: process.env.CARS_SERVICE_DATABASE_HOST,
  port: +process.env.CARS_SERVICE_DATABASE_PORT,
  username: process.env.CARS_SERVICE_DATABASE_USERNAME,
  password: process.env.CARS_SERVICE_DATABASE_PASSWORD,
  database: 'cars', // don't change
  entities: isProd ? [] : ['**/*.entity{.ts,.js}'], // use an empty array in production
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'], // only with __dirname to apply migration
  migrationsTableName: 'migrations',
});
