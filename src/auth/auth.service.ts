import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { UserService } from "src/user/user.service";
import { JwtService } from "@nestjs/jwt";


@Injectable({})
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    // async signUp(authDto: AuthDto) {
    //     const hash = await argon.hash(authDto.password);
    //     try {
    //         const user = await this.userService.createUser({ password: hash, email: authDto.email });
    //         return user;

    //     } catch (error) {
    //         throw error;
    //     }
    // }

    async login(authDto: AuthDto) {
        const user = await this.userService.getUserByEmail(authDto.email);
        if (!user) {
            throw new UnauthorizedException('Incorrect credentials');
        }
        const passwordMatch = await argon.verify(user.password, authDto.password);

        if (!passwordMatch) {
            throw new UnauthorizedException('Incorrect credentials');
        }
        const payload = { sub: user.id, userName: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}