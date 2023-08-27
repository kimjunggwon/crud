import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    subject: string;

    @Column()
    content: string;

    @Column()
    writer: string;

    @Column({ default: true })
    createdDt: Date = new Date();
}