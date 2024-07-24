import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/user.entity';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { Family } from './modules/family/family.entity';
import { FamilyModule } from './modules/family/family.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'postgres',
      password: 'pass',
      database: 'finances',
      entities: [User, Family],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Family]),
    AuthModule,
    UserModule,
    FamilyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
