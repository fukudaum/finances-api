import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async validateUser(email: string, displayName: string) {
    const user = await this.userRepo.findOne({ where: { email: email } });

    if (user) {
      return user;
    }

    const newUser = this.userRepo.create({ email, displayName });
    await this.userRepo.save(newUser);
    return newUser;
  }

  async findUser(id: string) {
    const user = await this.userRepo.findOne({ where: { id } });
    return id;
  }

  handlerLogin() {
    return 'handlerLogin';
  }

}