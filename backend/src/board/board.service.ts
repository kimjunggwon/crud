import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from '../entity/board.entity';
import { Repository } from 'typeorm';
import { getConnection } from "typeorm";

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board) private boardRepository: Repository<Board>,
    ) {}

    findAll(): Promise<Board[]> {
        return this.boardRepository.find();
        console.log(this.boardRepository.find());

    }

    findOne(id: string): Promise<Board> {
        return this.boardRepository.findOne({
            where: {
                id: id
            }
        });
    }

    async create(board: Board): Promise<void> {
        await this.boardRepository.save(board);
    }

    async remove(id: number): Promise<void> {
        await this.boardRepository.delete(id);
    }

    async update(id: string, board: Board): Promise<void> {
        const board_id = await this.boardRepository.findOne({
            where: { id }
        });
        if(board_id) {
            await getConnection()
                .createQueryBuilder()
                .update(Board)
                .set({
                    subject: board.subject,
                    content: board.content,
                    writer: board.writer
                })
                .where("id = :id", { id })
                .execute();
        }
    }
}