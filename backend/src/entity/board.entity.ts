import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity({ name: 'board' })
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: 'varchar', length: 255 })
    subject: string;

    @Column({ type: 'text'})
    content: string;

    @Column({ type: 'varchar', length: 255 })
    writer: string;
}