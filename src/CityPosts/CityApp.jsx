import { useState } from "react";
import CityNavbar from "./CityNavbar";
import Posts from "./Posts";
import EmptyFolder from "../EmptyFolder";
import PostInput from './PostInput'
import PostCard from "./PostCard";
import './CityApp.css'

const CityApp=()=>{
    const [cityPostList , setCityPostList] = useState([{}]);
    const [showInputModal , setShowInputModal] = useState(false);

    return(
        <div className= "PostAppMainDiv" >
            <CityNavbar/>
            <Posts showInputModal={showInputModal} setShowInputModal={setShowInputModal}/>
            {
                cityPostList.length>0?(
                    <></>
                ):(
                    <EmptyFolder/>
                )
            }
            {
                showInputModal && (
                    <PostInput 
                    showInputModal={showInputModal} setShowInputModal={setShowInputModal}
                    />
                )
            }
            <PostCard/>
        </div>
    )
}

export default CityApp ;
