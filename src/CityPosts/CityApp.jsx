import { useEffect, useState } from "react";
import CityNavbar from "./CityNavbar";
import Posts from "./Posts";
import EmptyFolder from "../EmptyFolder";
import PostInput from './PostInput'
import PostCard from "./PostCard";
import './CityApp.css'

import {db} from '../firebaseconfig'; 

import { doc, collection, getDocs } from 'firebase/firestore';
import { useParams } from "react-router-dom";


const FetchCityPost = async (searchId) => {
    const parentDocRef = doc(db, `Cities/${searchId}`); // Replace with your actual collection and document names
    const subCollectionRef = collection(parentDocRef, 'VisitPlaces');
    let data = [];

    try {
        const subCollectionSnapshot = await getDocs(subCollectionRef);
        subCollectionSnapshot.forEach((doc) => {
        const documentData = {
            id: doc.id,
            ...doc.data(),
          };
          data.push(documentData);
    });
    } catch (error) {
      console.error('Error getting documents from subcollection: ', error);
    }
    return data;
  };
  




const CityApp=()=>{
    const { CityID } = useParams();
    let searchId = CityID.slice(1);
    
  
    
    const [cityPostList , setCityPostList] = useState([]);
    const [showInputModal , setShowInputModal] = useState(false);
    const [searchedQuery , setSearchedQuery] = useState(null);
    const [copyCityPostList , setCityCopyPostList] = useState(cityPostList);
    const [EditId , setEditId] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          const data = await FetchCityPost(searchId);
          setCityPostList(data);
        };
    
        fetchData();

      }, [searchId]);


    useEffect(()=>{
          if(searchedQuery!==null)
          {
                setCityCopyPostList(
                    cityPostList.filter(
                        (element)=>{
                            return (
                                element.SubTitle.toLowerCase().includes(searchedQuery)||
                                element.AboutCityText.toLowerCase().includes(searchedQuery)||
                                element.CreatingDate.toLowerCase().includes(searchedQuery)
                            );
                        }
                    )
                    )
          } 
          else {
                setCityCopyPostList(cityPostList);
          } 
    },[cityPostList , searchedQuery]);

    return(
        <div className= "PostAppMainDiv" >
            <CityNavbar setSearchedQuery={setSearchedQuery}/>
            <Posts showInputModal={showInputModal} setShowInputModal={setShowInputModal}/>
            {
                copyCityPostList.length>0?(
                    <div id="ShowPostCards">
                        {
                            copyCityPostList.map((element)=>{
                                return <PostCard element={element} 
                                    key={element.id} setEditId= {setEditId} 
                                    cityPostList={cityPostList} setCityPostList={setCityPostList}
                                    setShowInputModal={setShowInputModal}
                                    />
                            })
                        }
                    </div>
                ):(
                    <EmptyFolder/>
                )
            }
            {
                showInputModal && (
                    <PostInput 
                        EditId = {EditId} 
                        setEditId = {setEditId}
                        showInputModal = {showInputModal} 
                        setShowInputModal = {setShowInputModal}
                        cityPostList = {cityPostList} 
                        setCityPostList = {setCityPostList} 
                    />
                )
            }
            
        </div>
    )
}




export  {CityApp , FetchCityPost};

