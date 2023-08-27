import React, {useEffect, useState} from 'react';
import axios from "axios";

const BoardList = () => {
    const [ boardList, setBoardList ] = useState([]);

    const getBoardList = async () => {
        const resp = await (await axios.get('//localhost:8080/board')).data;
        setBoardList(resp.data);

        console.log(boardList);
    }

    useEffect(() => {
        getBoardList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
           게시판 화면입니다.
        </div>
    );
};

export default BoardList;