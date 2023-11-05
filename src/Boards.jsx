import './Boards.css'
import BoardItem from './BoardItem';
import EmptyFolder from './EmptyFolder';
const Boards=(props)=>{

    return (
        <div className='Boards'>
            <div id='Heading'>
                My boards    
            </div>
            {
                props.boardList.length>0?(
                        <div className='Boards-list'>
                                        {
                                            props.boardList.map((element)=>{
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