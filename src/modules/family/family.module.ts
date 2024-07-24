import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Family } from "./family.entity";
import { FamilyController } from "./family.controller";
import { FamilyService } from "./family.service";
import { User } from "../user/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Family, User])],
    controllers: [FamilyController],
    providers: [FamilyService],
  })
  export class FamilyModule {}