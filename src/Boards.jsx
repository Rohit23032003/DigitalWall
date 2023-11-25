import './Boards.css'
import BoardItem from './BoardItem';
import EmptyFolder from './EmptyFolder';
import { useEffect, useState } from 'react';

const Boards=(props)=>{

    const [copyBoardList , setCopyBoardList] = useState([]);

    useEffect(()=>{
        if(props.querySearch.length>0)
        {
            const newQueryCopy = props.querySearch.toLowerCase();
            setCopyBoardList(
                props.boardList.filter((element)=>{
                    return element.CityName.toLowerCase().includes(newQueryCopy);
                })
            );
        }
        else {
            setCopyBoardList(props.boardList);
        }
    },[props.boardList ,props.querySearch]);

    return (
        <div className='Boards'>
            <div id='Heading'>
                My boards    
            </div>
            {
                copyBoardList.length>0?(
                        <div className='Boards-list'>
                                        {
                                            copyBoardList.map((element)=>{
                                                return (
                                                    <BoardItem  key={element.id}  element={element} 
                                                        setIsEditID={props.setIsEditID}
                                                        createBoard = {props.createBoard} 
                                                        setCreateBoard = {props.setCreateBoard}
                                                        boardList={props.boardList}
                                                        setBoardList={props.setBoardList}
                                                    />
                                                )
                                            })
                                        }
                        </div> 
                ):(
                    <EmptyFolder/>
                ) 
            }
            
        </div>
    )
}

export default Boards ;