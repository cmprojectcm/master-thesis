import { MigrationInterface, QueryRunner } from "typeorm";

export class $npmConfigName1676202741693 implements MigrationInterface {
    name = '$npmConfigName1676202741693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "data" ("id" SERIAL NOT NULL, "uri" character varying NOT NULL, "category" character varying NOT NULL, "type" character varying NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_2533602bd9247937e3a4861e173" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "metadata" ("id" SERIAL NOT NULL, "uri" character varying NOT NULL, "email" character varying NOT NULL, "genesisTime" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "expirationTime" TIMESTAMP NOT NULL, "backwardRef" character varying NOT NULL, "originalRecord" character varying NOT NULL, "backwardRootRef" character varying NOT NULL, "digitalSignature" character varying NOT NULL, CONSTRAINT "PK_56b22355e89941b9792c04ab176" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "forward_reference" ("id" SERIAL NOT NULL, "uri" character varying NOT NULL, "forwardRef" character varying NOT NULL, "dataTransfered" character varying NOT NULL, CONSTRAINT "PK_13a580548e1b19a3d1699db6580" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "record" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "clientFirstName" character varying NOT NULL, "clientLastName" character varying NOT NULL, "clientAddress" character varying NOT NULL, "clientCity" character varying NOT NULL, "clientZip" character varying NOT NULL, CONSTRAINT "PK_5cb1f4d1aff275cf9001f4343b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "role" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "record"`);
        await queryRunner.query(`DROP TABLE "forward_reference"`);
        await queryRunner.query(`DROP TABLE "metadata"`);
        await queryRunner.query(`DROP TABLE "data"`);
    }

}
