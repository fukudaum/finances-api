import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { FamilyService } from "./family.service";
import { GetUser } from "../user/get-user.decorator";
import { User } from "../user/user.entity";
import { AuthGuard } from "../auth/guard/auth.guard";

@Controller('family')
export class FamilyController {
    constructor(private familyService: FamilyService) {}

    @Post()
    @UseGuards(AuthGuard)
    async createFamily(@GetUser() user: User, @Body() params: any) {
        console.log(user)
        return await this.familyService.createFamily(user.id, params.familyId, params.familyName);
    }

    @Get()
    @UseGuards(AuthGuard)
    async getFamily(@GetUser() user: User) {
        console.log(user)
        return;
        //return await this.familyService.createFamily(user.id, params.familyId, params.familyName);
    }
}