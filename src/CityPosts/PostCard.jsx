import './PostCard.css';
import Bookmark from '../imageFolder/BookmarkOutlined.png'
import Option from '../imageFolder/Option.png'
import PlaceImg from '../imageFolder/image4.png'
import EmptyHeartIcon from'../imageFolder/HeartOutlined.png'
import { useState } from 'react';
import EditDelete from '../EditDelete';

const PostCard=()=>{
    const [likes , setLikes] = useState(0);
    const [showEditDelete , setShowEditDelete] = useState(false);
    return (
        <div className='CardMainDiv'>
            <div className='TopSubjectBookMarkEdiDelete'>
                    <div id='HeadingPostCard'>Galapagos Islands, Ecuador</div>
                    <img src={Bookmark} alt='BookMarkPic' style={{cursor:"pointer" ,height:"1.25rem"}}/>
                    <img src={Option} alt='OptionIcon' style={{height:"1.25rem",cursor:"pointer"}}
                        onClick={()=>setShowEditDelete(!showEditDelete)}
                    />
                    
            </div>
            {
                        showEditDelete &&(
                                    <div className='EditDeleteCard'>
                                        <EditDelete />
                                     </div>      
                                )
                    }
            <p id='CreatedPostDate'>25th July</p>
            <img src={PlaceImg} alt='' id='CityPlaceImg'/>
            <p id='ContentFieldAboutPlace'>
                The Galápagos Islands is a volcanic 
                archipelago in the Pacific Ocean. It's 
                considered one of the world's foremost 
                destinations for wildlife-viewing. A province
                of Ecuador, it lies about 1,000km off its coast. 
                Its isolated terrain shelters a diversity of plant 
                and animal species, many found nowhere else. Charles 
                Darwin visited in 1835, and his observation of Galápagos' 
                species later inspired his theory of evolution. 
                species later inspired his theory of evolution. 
                species later inspired his theory of evolution. 
                species later inspired his theory of evolution. 

            </p>
            <div id="SaperatedLineCard"></div>
            <div id='LikesTextIcon'>
                 <img src={EmptyHeartIcon} alt='HeartIcon' onClick={()=>setLikes(likes+1)}/>
                <span>{likes}</span>
            </div>
        </div>
    )
}

export default PostCard ;
