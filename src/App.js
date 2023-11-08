// import app from './firebaseconfig';
import './App.css';
import NavBar  from './NavBar';
import Boards from './Boards';
import BoardInput from './Boards_input';
import { useState } from 'react';
// import { getFirestore , collection , addDoc , doc , getDoc  } from "firebase/firestore";
// import { getStorage, ref, uploadBytes } from "firebase/storage";

// import { useState } from 'react';

// const DataStore = getStorage(app);



function App() {

    const [createBoard , setCreateBoard] = useState(false);
    const [boardList , setBoardList] = useState([]);
    const [isEditID , setIsEditID] = useState(null);
    const [querySearch , setQuerySearch] = useState("");
  return (
  <div>
    <NavBar createBoard = {createBoard} setCreateBoard = {setCreateBoard} 
      setQuerySearch ={setQuerySearch}
    />
    <Boards  boardList={boardList} setBoardList ={setBoardList}  setIsEditID={setIsEditID} 
      createBoard = {createBoard} setCreateBoard = {setCreateBoard} 
      querySearch={querySearch}
    />
    {
      createBoard && (
        <BoardInput createBoard = {createBoard} setCreateBoard={setCreateBoard} 
          setBoardList={setBoardList}  boardList = {boardList}  isEditID={isEditID}
          setIsEditID = {setIsEditID}
        />
      )
    }
  </div> 
  );
}

export default App;
