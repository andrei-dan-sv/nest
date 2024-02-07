import { IsEmail, IsNotEmpty, IsString, IsInt } from 'class-validator'

export class UserDto {
    @IsInt()
    id: number;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    isActive: boolean;
}