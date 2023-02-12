import { Metadata } from './MetaData';
import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Record{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    @IsEmail()
    @IsNotEmpty({ message: "email is required" })
    email: string;

    @Column()
    clientFirstName: string;
  
    @Column()
    clientLastName: string;

    @Column()
    clientAddress:string

    @Column()
    clientCity:string

    @Column()
    clientZip:string

    // @ManyToOne(type=> Metadata, metadata=> metadata.email) metadata:Metadata

}
