import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthGuard } from './auth.guard';

@Module({
    imports: [UserModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET_KEY'),
                global: true,
                signOptions: { expiresIn: '60s' }
            }),
            inject: [ConfigService],
        })],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthModule]

})
export class AuthModule { }
