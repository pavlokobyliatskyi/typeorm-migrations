import { MigrationInterface, QueryRunner } from 'typeorm';

export class CarsCreateTable1732473791720 implements MigrationInterface {
  name = 'CarsCreateTable1732473791720';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "cars" (
                "id" SERIAL NOT NULL,
                "title" character varying NOT NULL,
                CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "cars"
        `);
  }
}
