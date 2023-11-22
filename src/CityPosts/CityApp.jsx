import { useEffect, useState } from "react";
import CityNavbar from "./CityNavbar";
import Posts from "./Posts";
import EmptyFolder from "../EmptyFolder";
import PostInput from './PostInput'
import PostCard from "./PostCard";
import './CityApp.css'

const CityApp=()=>{
    const [cityPostList , setCityPostList] = useState([]);
    const [showInputModal , setShowInputModal] = useState(false);
    const [searchedQuery , setSearchedQuery] = useState("");
    const [copyCityPostList , setCityCopyPostList] = useState(cityPostList);
    const [EditId , setEditId] = useState(null);


    useEffect(()=>{
          if(searchedQuery.length>0)
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

export default CityApp ;
