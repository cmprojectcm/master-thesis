import { MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../entities/User";
import { AppDataSource } from "../utils/data-source";

export class $npmConfigName1674386862457 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    let user = new User();
    user.username = "admin";
    user.password = "admin";
    user.firstName = "Christos";
    user.lastName = "Michael";
    user.email = "christosmichaelcs@gmail.com";
    user.hashPassword();
    user.role = "ADMIN";
    const userRepository = AppDataSource.getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
