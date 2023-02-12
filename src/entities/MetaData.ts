import { Record } from './Record';
import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Metadata{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    @IsNotEmpty({message:"URI is required"})
    uri:string;

    @Column()
    @IsEmail()
    @IsNotEmpty({ message: "email is required" })
    // @ManyToOne(type => Record)
    // record:Record; 
    email: string;

    @Column()
    @IsNotEmpty({ message: "genesis time is required" })
    genesisTime:Date;

    @Column()
    @IsNotEmpty({ message: "creation time is required" })
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @IsNotEmpty({ message: "expiration time is required" })
    expirationTime: Date;

    @Column()
    @IsNotEmpty({ message: "backward ref is required" })
    backwardRef: string;

    @Column()
    @IsNotEmpty({ message: "original record is required" })
    originalRecord: string;

    @Column()
    @IsNotEmpty({ message: "backward root ref is required" })
    backwardRootRef: string;

    @Column()
    @IsNotEmpty({ message: "digital signature is required" })
    digitalSignature: string;
}
