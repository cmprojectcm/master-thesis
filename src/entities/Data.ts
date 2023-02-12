import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Data{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    @IsNotEmpty({message:"URI is required"})
    uri:string;

    @Column()
    category:string

    @Column()
    type:string

    @Column()
    value:string

}
