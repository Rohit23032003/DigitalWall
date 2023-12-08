import './PostCard.css';
import Bookmark from '../imageFolder/BookmarkOutlined.png'
import Option from '../imageFolder/Option.png'
import PlaceImg from '../imageFolder/image4.png'
import EmptyHeartIcon from'../imageFolder/HeartOutlined.png'
import { useState } from 'react';
import EditDelete from '../EditDelete';
import RedHeart from '../imageFolder/_HeartLikeFilled.png'
import BookMarkPost from '../imageFolder/YellowBookmarkOutlined.png'

import { doc, collection, updateDoc } from 'firebase/firestore';
import {db } from '../firebaseconfig';
import { useParams } from 'react-router-dom';


const PostCard=(props)=>{
    const [readObj , setReadObj]= useState(props.element);


    const [likes , setLikes] = useState(readObj.Likes);
    const [showEditDelete , setShowEditDelete] = useState(false);
    const [BookMarked , setBookMarked] =useState(readObj.BookMark);
    
    const {CityID} = useParams();
    const searchId = CityID.slice(1);

    const parentDocRef = doc(db, `Cities/${searchId}`); 
    const subCollectionRef = collection(parentDocRef, 'VisitPlaces');
    
    const handleLikes=async(e)=>{
        e.preventDefault();
        e.stopPropagation();
        const newListItem = {
            ...readObj,
            Likes:likes+1
        }
        setReadObj(newListItem);
        setLikes(likes+1);
        const PostDocRef = doc(subCollectionRef, readObj.id);
        await updateDoc(PostDocRef , newListItem);
    }

    const handleBookMark=async(e)=>{
        e.preventDefault();
        e.stopPropagation();
        const newListItem = {
                ...readObj,
                BookMark:!BookMarked
            }
            setReadObj(newListItem);
            setBookMarked(!BookMarked);
            const PostDocRef = doc(subCollectionRef, readObj.id);
            await updateDoc(PostDocRef , newListItem);
    }


    return (
        <div className='CardMainDiv'>
            <div className='TopSubjectBookMarkEdiDelete'>
                    <div id='HeadingPostCard'>{props?.element?.SubTitle}</div>
                    <img src={BookMarked===true?BookMarkPost:Bookmark} alt='BookMarkPic' 
                        onClick={handleBookMark}
                        style={{cursor:"pointer" ,height:"1.25rem"}}
                    />
                    <img src={Option} alt='OptionIcon' style={{height:"1.25rem",cursor:"pointer"}}
                        onClick={()=>setShowEditDelete(!showEditDelete)}

                    />
                    
            </div>
            {
                        showEditDelete &&(
                                    <div className='EditDeleteCard'>
                                        <EditDelete elementId={props?.element?.id} 
                                            cityPostList={props.cityPostList}
                                            setCityPostList = {props.setCityPostList}
                                            isCityPost={true}
                                            setEditId ={props.setEditId}
                                            setShowInputModal={props.setShowInputModal}
                                            setShowEditDelete={setShowEditDelete}
                                            searchId={searchId}
                                        />
                                     </div>      
                                )
                    }
                    
            <p id='CreatedPostDate'>{props?.element?.CreatingDate}</p>
            <img src={props?.element?.FileUrl?props?.element?.FileUrl:PlaceImg} 
            alt='' id='CityPlaceImg'/>
            <p id='ContentFieldAboutPlace'>
                 {props?.element?.AboutCityText}   
            </p>
            <div id="SaperatedLineCard"></div>
            <div id='LikesTextIcon'>
                 <img src={likes>0?RedHeart:EmptyHeartIcon} alt='HeartIcon' 
                  onClick={handleLikes}
                  style={{cursor:'pointer'}}
                  />
                <span>{likes}</span>
            </div>
        </div>
    )
}

export default PostCard ;
