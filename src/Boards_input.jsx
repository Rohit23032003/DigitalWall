import './Boards_input.css';
import cancelImg from './imageFolder/Group1176.png'
import { useState } from 'react';

const BoardInput = (props) => {
    let index=null;
    if(props?.isEditID) {
        index = props.boardList.findIndex((objs)=>objs.id === props?.isEditID);
    }
    const [inputText , setInputText] = useState(props.isEditID!==null?`${props?.boardList[index].CityName}`:null);
    const [selectedColor, setSelectedColor] = useState(props?.isEditID?`${props?.boardList[index].Color}`:null);
    
    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        const randomId = crypto.randomUUID();
        if(inputText===null || inputText.length===0){
            alert("Please give Name of City ");
            return;
        }
        if(props.isEditID!==null){
            console.log("Edit ID "+props.isEditID);
                const newElementList={
                    id : props.isEditID,
                    Color:selectedColor,
                    CityName:inputText
                }
                const changeBoardList = [...props.boardList];
                changeBoardList.splice(index,1,newElementList);
                props.setBoardList(changeBoardList);
                props?.setCreateBoard(!props.createBoard);   
                props.setIsEditID(null);
        }
        else{
                props.setBoardList([...props.boardList , 
                    {
                        id:randomId,
                        Color:selectedColor,
                        CityName:inputText
                }]) ;
                props?.setCreateBoard(!props.createBoard);   
        }
        // console.log("randorm  "+randomId);
    }

    const inputChange=(e)=> {
        e.preventDefault();
        setInputText(e.target.value.trim());
    }    



    return (
        <div className="modal-container">
            <div className="modal-box">
                <p id='Add_Content'>Add a name for your board</p>
                <span id='cancelImg' onClick={()=>{
                        props?.setCreateBoard(!props.createBoard)
                        if(props.isEditID!==null) props.setIsEditID(null);
                    }}   
                    >
                    <img src={cancelImg} alt=''/>
                </span>
                <input type='text' id='InputField'
                 placeholder='Places around the world'
                    onChange={inputChange}
                    value={inputText!==null?inputText:""}
                 />
                
                <p id='SelectContent'>
                     Select post colour
                </p>
                <p  id='SelectContent2'>
                    Here are some templates to help you get started
                </p>
                <div className='ColorClass'>
                    <div id='Color1' onClick={() => handleColorClick('#A7F0F9')} className={selectedColor === '#A7F0F9' ? 'selected' : ''}></div>
                    <div id='Color2' onClick={() => handleColorClick('#C5C5FC')} className={selectedColor === '#C5C5FC' ? 'selected' : ''}></div>
                    <div id='Color3' onClick={() => handleColorClick('#FFAEC0')} className={selectedColor === '#FFAEC0' ? 'selected' : ''}></div>
                    <div id='Color4' onClick={() => handleColorClick('#FC6')}  className =  {selectedColor === '#FC6' ? 'selected' : ''}></div>
                </div>
                    <button id='CreateBoardbtn' onClick={handleSubmit}>Create board</button>
            </div>
        </div>
    );
}

export default BoardInput;
