import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ForwardReference{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    @IsNotEmpty({message:"URI is required"})
    uri:string;

    @Column()
    forwardRef: string;

    @Column()
    dataTransfered: string;

}
