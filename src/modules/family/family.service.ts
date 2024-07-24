import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/user.entity";
import { Family } from "./family.entity";
import { Repository } from "typeorm";

@Injectable()
export class FamilyService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Family)
        private familyRepository: Repository<Family>
    ) {}

    async createFamily(userId: string, familyId: string, name: string): Promise<Family> {
        const family = await this.familyRepository.create({
            name,
            patriarchId: userId,            
        });

        return family;
    }

    async addUserToFamily(userId: string, familyId: string): Promise<void> {
        const user = await this.userRepository.findOne({
            where: {
                id: userId
            },
            relations: ["families"]
        });

        const family = await this.familyRepository.findOne({
            where: {
                id: familyId
            },
            relations: ["users"]
        });
        
        if(user && family) {
            user.families.push(family);
            await this.userRepository.save(user);
        }
    }

    async getFamiliesForUser(userId: string): Promise<Family[]> {
        const user = await this.userRepository.findOne(
            { 
                where: { 
                    id: userId 
                }, 
                relations: ["families"] 
            });
        return user.families;
      }
    
      async getUsersForFamily(familyId: string): Promise<User[]> {
        const family = await this.familyRepository.findOne(
            { 
                where: { 
                    id: familyId 
                }, 
                relations: ["users"]
             });
        return family.users;
      }
}