import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from '../entity/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board) private boardRepository: Repository<Board>,
    ) {}

    async allBaord(board) {
        const result = await this.boardRepository.find();
        return result;
    }

    insertBoard(board): Promise<Board> {
        return this.boardRepository.save(board);
    }

    async getBoard(id: number){
        const result = await this.boardRepository.findOne({
            where: { id },
        });

        return result;
    }

    async updateBoard(id, _board){
        const board: Board = await this.getBoard(id);
        console.log(_board);
        board.subject = _board.subject;
        board.content = _board.content;
        console.log(board);
        this.boardRepository.save(board);
    }

    deleteBoard(id: any){
        return this.boardRepository.delete({ id });
    }
}
