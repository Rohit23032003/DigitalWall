import { useState } from "react";
import CityNavbar from "./CityNavbar";
import Posts from "./Posts";
import EmptyFolder from "../EmptyFolder";
import PostInput from './PostInput'

const CityApp=()=>{
    const [cityPostList , setCityPostList] = useState([]);
    const [showInputModal , setShowInputModal] = useState(false);

    return(
        <div style={{backgroundColor:"#EBFCFF" , minHeight:"100vh"}}>
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
        </div>
    )
}

export default CityApp ;
