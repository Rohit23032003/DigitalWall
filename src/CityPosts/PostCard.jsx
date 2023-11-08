import './PostCard.css';
import Bookmark from '../imageFolder/BookmarkOutlined.png'
import Option from '../imageFolder/Option.png'
import PlaceImg from '../imageFolder/image4.png'
import EmptyHeartIcon from'../imageFolder/HeartOutlined.png'
import { useState } from 'react';
import EditDelete from '../EditDelete';
import RedHeart from '../imageFolder/_HeartLikeFilled.png'
import BookMarkPost from '../imageFolder/YellowBookmarkOutlined.png'

const PostCard=(props)=>{
    const [likes , setLikes] = useState(0);
    const [showEditDelete , setShowEditDelete] = useState(false);
    const [BookMarked , setBookMarked] =useState(false)
    return (
        <div className='CardMainDiv'>
            <div className='TopSubjectBookMarkEdiDelete'>
                    <div id='HeadingPostCard'>{props?.element?.SubTitle}</div>
                    <img src={BookMarked===true?BookMarkPost:Bookmark} alt='BookMarkPic' 
                        onClick={()=>setBookMarked(!BookMarked)}
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
                 <img src={likes>0?RedHeart:EmptyHeartIcon} alt='HeartIcon' onClick={()=>setLikes(likes+1)}/>
                <span>{likes}</span>
            </div>
        </div>
    )
}

export default PostCard ;
