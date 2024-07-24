import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { User } from "../user/user.entity";

@Entity('family')
@Unique(['id'])
export class Family {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    patriarchId: string

    @ManyToMany(() => User, user => user.families)
    users: User[];
}