import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { UserDto } from './dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>
    ) { }

    async getAllUsers(): Promise<Users[] | null> {
        return await this.userRepository.find();
    }

    async getUserById(id: number): Promise<Users | null> {
        return await this.userRepository.findOneBy({ id });
    }

    async getUserByEmail(email: string): Promise<Users | null> {
        return await this.userRepository.findOneBy({ email });
    }

    async createUser(userDto: UserDto): Promise<Users> {
        return await this.userRepository.save(userDto);
    }
}
