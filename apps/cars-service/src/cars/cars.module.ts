import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from './entities/car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity])],
})
export class CarsModule {}
