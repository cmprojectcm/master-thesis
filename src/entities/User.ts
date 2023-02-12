import { IsEmail, IsNotEmpty, Length } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import * as bcrypt from "bcryptjs";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 20)
  @IsNotEmpty({ message: "username is required" })
  username: string;

  @Column()
  @Length(4, 100)
  @IsNotEmpty({ message: "password is required" })
  password: string;

  @Column()
  @IsEmail()
  @IsNotEmpty({ message: "email is required" })
  email: string;

  @Column()
  @IsNotEmpty({ message: "role is required" })
  role: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  age: number;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
