import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const BoardList = () => {
    const navigate = useNavigate();
    const [ boardList, setBoardList ] = useState([]);

    const getBoardList = async () => {
        const response = await axios.get(`http://localhost:8080/board`);
        setBoardList(response.data);
        console.log(response.data);
        const pngn = response.pagination;
        console.log(pngn);

    }

    const moveToWrite = () => {
        navigate('/write');
    }
    useEffect(() => {
        getBoardList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <ul>
                {boardList.map((board) => (
                    <li key={board.id}>
                        <Link to={`/board/${board.id}`}>{board.subject}</Link>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={moveToWrite}>글쓰기</button>
            </div>
        </div>
    );
};

export default BoardList;