import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Family } from "../family/family.entity";

@Entity('user')
@Unique(['email'])
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    email: string

    @Column()
    displayName: string

    @ManyToMany(() => Family, family => family.users)
    @JoinTable({
        name: "user_family",
        joinColumn: {
            name: "userId",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "familyId",
            referencedColumnName: "id"
        }
    })
    families: Family[];
}