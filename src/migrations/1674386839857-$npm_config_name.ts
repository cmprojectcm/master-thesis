import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1674386839857 implements MigrationInterface {
    name = '$npmConfigName1674386839857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "age" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "age" SET NOT NULL`);
    }

}
