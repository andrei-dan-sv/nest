import { IsString } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, DeleteQueryBuilder, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;


    @Column({ nullable: false, unique: true })
    email: string;

    @IsString()
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