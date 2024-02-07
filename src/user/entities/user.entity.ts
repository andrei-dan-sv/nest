import { IsEmail, IsString } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, DeleteQueryBuilder, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    @IsString()
    first_name: string;

    @Column({ nullable: true })
    @IsString()
    last_name: string;

    @Column({ nullable: false, unique: true })
    @IsEmail()
    email: string;

    @IsString()
    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}