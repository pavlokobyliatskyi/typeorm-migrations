import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const isProd = process.env.CARS_SERVICE_NODE_ENV === 'prod';

        return {
          type: 'postgres',
          host: process.env.CARS_SERVICE_DATABASE_HOST,
          port: +process.env.CARS_SERVICE_DATABASE_PORT,
          username: process.env.CARS_SERVICE_DATABASE_USERNAME,
          password: process.env.CARS_SERVICE_DATABASE_PASSWORD,
          database: 'cars', // don't change
          autoLoadEntities: true,
          synchronize: !isProd, // "true" only for dev, if you want
        };
      },
    }),
  ],
})
export class GatewayModule {}
