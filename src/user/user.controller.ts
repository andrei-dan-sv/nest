import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Users } from './entities/user.entity';
import { UserDto } from './dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    @Get()
    async getAllUsers(): Promise<Users[]> {
        return await this.userService.getAllUsers();
    }

    @Get(':userId')
    async getUserById(@Param('userId') userId: number): Promise<Users> {
        return await this.userService.getUserById(userId);
    }

    @Post()
    async createUser(@Body() userDto: UserDto): Promise<Users> {
        return await this.userService.createUser(userDto);
    }
}
