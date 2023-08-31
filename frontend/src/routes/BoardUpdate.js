import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BoardUpdate = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [board, setBoard] = useState({
        id: 0,
        subject: '',
        content: '',
        writer: ''
    });

    const { subject, content, writer } = board;

    const onChange = (event) => {
        const { value, name } = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const getBoard = async () => {
        const response = await axios.get(`http://localhost:8080/board/${id}`);
        setBoard(response.data);
    }

    const updateBoard = async () => {
        await axios.patch(`http://localhost:8080/board/update/${id}`, board).then((res) => {
            alert('수정되었습니다.');
            navigate('/board/'+id);
        });
    };

    const backToDetail = () => {
        navigate('/board/'+id);
    }

    useEffect(() => {
        getBoard();
    }, []);

    return (
        <div>
            <div>
                <span>제목</span>
                <input type="text" name="subject" value={subject} onChange={onChange} />
            </div>
            <br/>
            <div>
                <span>작성자</span>
                <input type="text" name="writer" value={writer} readOnly={true}/>
            </div>
            <br/>
            <div>
                <span>내용</span>
                <textarea name="content" cols="30" rows="10" value={content} onChange={onChange}></textarea>
            </div>
            <br/>
            <div>
                <button onClick={updateBoard}>수정</button>
                <button onClick={backToDetail}>취소</button>
            </div>
        </div>
    )
}

export default BoardUpdate;