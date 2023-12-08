
import './CityNavbar.css';
import BackArrow from '../imageFolder/BackArrow.png';
import SearchIcon from '../imageFolder/SearchOutlined.png';
import BookMarkIcon from '../imageFolder/BookmarkOutlined.png';
import BookMarkedIcon from '../imageFolder/BookMarked.png';
import {NavLink} from 'react-router-dom'

import { doc, collection, setDoc, getDoc } from 'firebase/firestore';
import {db } from '../firebaseconfig';
import { useParams } from 'react-router-dom';

// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { useState , useEffect} from 'react';

const CityNavbar = (props) => {
    const [icon, setIcon] = useState(false);
    const { CityID } = useParams();
    const cityIdFromParams = CityID.slice(1);
  
    useEffect(() => {
      const fetchData = async () => {
        const parentDocRef = doc(db, 'Cities', cityIdFromParams);
        const subCollectionRef = collection(parentDocRef, 'BookMarked');
        const PostDocRef = doc(subCollectionRef, cityIdFromParams);
  
        try {
          const docSnap = await getDoc(PostDocRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data !== undefined && data !== null) {
              setIcon(data); // Assuming data is a boolean
            }
          }
        } catch (error) {
          console.error('Error fetching document:', error);
        }
      };
      fetchData();
    }, [cityIdFromParams]);
  
    const handleOnClick = async (e) => {
      e.stopPropagation();
      setIcon((prevIcon) => !prevIcon); // Toggle the icon state
  
      const parentDocRef = doc(db, 'Cities', cityIdFromParams);
      const subCollectionRef = collection(parentDocRef, 'BookMarked');
      const PostDocRef = doc(subCollectionRef, cityIdFromParams);
  
      try {
        await setDoc(PostDocRef, { icon: !icon }); // Assuming icon is a boolean
        console.log("created ");
      } catch (error) {
        console.log(error);
      }
    };


    return (
        <div className="CityNav">
            <div className='icon_back_text'>
                <NavLink to="/" replace>
                    <img src={BackArrow} alt='BackArrow' id='BackArrowIcon' />
                </NavLink>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.93531 1.08022C10.9396 -3.46269 30.9856 8.57762 30.9856 16.1068C30.9856 23.6359 11.4161 34.9456 4.93531 31.1651C-1.54549 27.3529 -1.06896 5.59137 4.93531 1.08022ZM12.5597 18.8389C12.5597 20.6179 13.0998 22.111 15.546 22.111C15.959 22.111 16.372 22.0157 16.6897 21.8569C17.0391 21.6663 17.2615 21.3804 17.2615 20.9991C17.2615 20.5544 16.9438 20.1414 16.372 20.1414C16.3084 20.1414 16.2767 20.1414 16.1178 20.1732C16.0283 20.1732 15.9489 20.1833 15.8796 20.1921C15.8259 20.1989 15.7782 20.2049 15.7366 20.2049C15.1648 20.2049 14.8471 19.6966 14.8471 18.8071V14.5183H16.2767C17.1662 14.5183 17.325 13.9147 17.325 13.5971C17.325 13.2794 17.1662 12.6758 16.2767 12.6758H14.8471V11.0873C14.8471 10.039 14.0846 9.84836 13.7034 9.84836C13.3222 9.84836 12.5597 10.039 12.5597 11.0873V12.6758H11.7973C10.9078 12.6758 10.7489 13.2794 10.7489 13.5971C10.7489 13.9147 10.9078 14.5183 11.7973 14.5183H12.5597V18.8389Z" fill="#EB4762"/>
                </svg>
                <div id='text'> Places around the world </div>
            </div>
            <div className='Search-BookMark'>
                    <div className='Search-FieldP'>
                            <div className="Search-Field">
                                    <img src={SearchIcon} alt='SearchIcon' style={{cursor:"pointer"}}/>  
                                    <input type="text" 
                                    placeholder='Search....' id='Input-Field'
                                        onChange={(e)=>props.setSearchedQuery(e.target.value.trim().toLowerCase())}
                                    />
                            </div>
                        </div>
                    <div id='saperate'></div>  
                        <img src={icon===false?BookMarkIcon:BookMarkedIcon} alt='BookMark' 
                    onClick={
                        handleOnClick
                    }
                        id='BookMarkIcon'
                    />        
            </div>
        </div>
    )
}

export default CityNavbar ;

