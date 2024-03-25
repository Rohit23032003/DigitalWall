// import app from './firebaseconfig';
import './App.css';
import NavBar  from './NavBar';
import Boards from './Boards';
import BoardInput from './Boards_input';
import { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from './firebaseconfig'; 

import { useLoaderData } from 'react-router-dom';

function App() {

    const Citylist = useLoaderData();

    const [boardList , setBoardList] = useState(Citylist);
    const [createBoard , setCreateBoard] = useState(false);
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


const FetchCities=async ()=>{

  const citiesCollectionRef = collection(db, 'Cities'); // Replace 'Cities' with your collection name
  const data=[];
      try {
        const querySnapshot = await getDocs(citiesCollectionRef);

        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            ...doc.data(),
          });
        });

      } catch (error) {
        alert('Error getting documents: ', error);
      }
      return data;
}

export {App,FetchCities};
