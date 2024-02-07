import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    providers: [UserService, AuthGuard, JwtService],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule { }
