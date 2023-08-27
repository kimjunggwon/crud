import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { Board } from '../entity/board.entity';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService) {}

    @Get('/')
    findAll(): Promise<Board[]>{
        return this.boardService.findAll();
    }

    @Get('/:id')
    findOne(@Param('id') id: string) {
        this.boardService.findOne(id);
    }

    @Post('/create')
    create(@Body() board: Board) {
        return this.boardService.create(board);
    }

    @Put('/update/:id')
    update(@Param('id') id: string, @Body() board: Board) {
        this.boardService.update(id, board);
    }

    @Delete('/delete/:id')
    remove(@Param('id') id: number){
        return this.boardService.remove(id);
    }
}
