import { useState } from 'react';
import './BoardItem.css';
import { useNavigate } from 'react-router-dom';
import EditDelete from './EditDelete';

const BoardItem = (props) => {

    const [showCard, setShowCard] = useState(false);
    const navigate = useNavigate();

    const handleNavigateClick=()=>{
        navigate(`/about/:${props.element.id}`);
    }

    const handleEditDeleteShow=(e)=>{
         e.preventDefault();   
         e.stopPropagation();
         setShowCard(!showCard)
    }    
    
    return (
        <div className='ItemDiv' onClick={handleNavigateClick}>
            <div className='colorDiv' style={{background:props?.element?.Color?`${props.element.Color}`:"aqua"}}></div>
            <div className='SubjectDiv'>{props?.element?.CityName}</div>
            <div className='optionDiv' onClick={handleEditDeleteShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M7 3C7 3.55229 7.44771 4.00001 8 4.00001C8.55228 4.00001 9 3.55229 9 3C9 2.44772 8.55228 2 8 2C7.44771 2 7 2.44772 7 3Z" fill="#222222" />
                    <path d="M7 13C7 13.5523 7.44771 14 8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44771 12 7 12.4477 7 13Z" fill="#222222" />
                    <path d="M8 9.00001C7.44771 9.00001 7 8.55229 7 8C7 7.44772 7.44771 7 8 7C8.55228 7 9 7.44772 9 8C9 8.55229 8.55228 9.00001 8 9.00001Z" fill="#222222" />
                </svg>
            </div>
            {showCard && (
                <div className='EditDeleteCard'>
                    <EditDelete elementId={props?.element?.id} setIsEditID={props.setIsEditID}
                        createBoard = {props.createBoard} setCreateBoard = {props.setCreateBoard}
                        showCard={showCard}  setShowCard={setShowCard}
                        setBoardList={props.setBoardList}
                        boardList = {props.boardList}
                    />
                 </div>
            )}
        </div>
    )
}

export default BoardItem;
