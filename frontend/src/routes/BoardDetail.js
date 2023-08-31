import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Board from '../components/Board';


const BoardDetail = () => {
    const { id } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ board, setBoard ] = useState({});
    const getBoard = async () => {
        const response = await axios.get(`http://localhost:8080/board/${id}`);
        setBoard(response.data);
        setLoading(false);
    };

    useEffect(() => {
        getBoard();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
            {loading ? (
                <h2>loading...</h2>
            ): (
                <Board
                    id={board.id}
                    subject={board.subject}
                    content={board.content}
                    writer={board.writer}
                />
            )}
        </div>
    );
};

export default BoardDetail;