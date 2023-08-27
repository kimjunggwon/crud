import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from '../entity/board.entity';

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'rnrgml789',
    database: 'board',
    entities: [Board],
    synchronize: true,
};