import { Body, Controller, Get, Injectable, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { AuthGuard } from "./auth.guard";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }

    @Post('signup')
    async signUp(@Body() authDto: AuthDto): Promise<any> {
        return await this.authService.login(authDto);
    }

    @Post('login')
    async signIn(@Body() authDto: AuthDto) {
        return await this.authService.login(authDto);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req): string {
        return req.user;
    }
}