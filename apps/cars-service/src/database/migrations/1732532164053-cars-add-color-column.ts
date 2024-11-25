import { MigrationInterface, QueryRunner } from 'typeorm';

export class CarsAddColorColumn1732532164053 implements MigrationInterface {
  name = 'CarsAddColorColumn1732532164053';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cars" ADD "color" character varying NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "color"`);
  }
}
