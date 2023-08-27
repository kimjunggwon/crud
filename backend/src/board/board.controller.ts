import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { Board } from '../entity/board.entity';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService) {}

    @Get('/board')
    allBoard(@Body() board: Board){
        return this.boardService.allBaord(board);
    }

    @Post('/insert')
    insertBoard(@Body() board: Board){
        return this.boardService.insertBoard(board);
    }

    @Get('/view/:id')
    async getBoard(@Param('id') id: number){
        const board = await this.boardService.getBoard(id);
        console.log(board);
        return board;
    }

    @Put('/update/:id')
    updateBoard(@Param('id') id: number, @Body() board: Board) {
        console.log(board);
        return this.boardService.updateBoard(id, board);
    }

    @Delete('/delete/:id')
    deleteBoard(@Param('id') id: number){
        return this.boardService.deleteBoard(id);
    }
}
