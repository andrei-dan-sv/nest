import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GuestHouseModule } from './guest-house/guest-house.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user/entities/user.entity';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TypeOrmModule.forRootAsync({
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      port: configService.get('POSTGRES_PORT'),
      username: configService.get('POSTGRES_USER'),
      password: configService.get('POSTGRES_PASSWORD'),
      database: configService.get('POSTGRES_DB'),
      synchronize: true,
      entities: [Users],
    }),
    inject: [ConfigService]
  }), AuthModule, UserModule, GuestHouseModule],
})
export class AppModule { }
