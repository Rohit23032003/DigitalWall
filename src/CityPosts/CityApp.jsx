import { useState } from "react";
import CityNavbar from "./CityNavbar";
import Posts from "./Posts";
import EmptyFolder from "../EmptyFolder";
import PostInput from './PostInput'
import PostCard from "./PostCard";
import './CityApp.css'

const CityApp=()=>{
    const [cityPostList , setCityPostList] = useState([{id:1}]);
    const [showInputModal , setShowInputModal] = useState(false);

    return(
        <div className= "PostAppMainDiv" >
            <CityNavbar/>
            <Posts showInputModal={showInputModal} setShowInputModal={setShowInputModal}/>
            {
                cityPostList.length>0?(
                    // cityPostList.map(()=>{
                        <></>

                    // })
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
            <div id="ShowPostCards">
                <PostCard/>
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
        </div>
    )
}

export default CityApp ;
