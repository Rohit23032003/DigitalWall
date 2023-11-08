
import './PostInput.css'
import CancelIcon from '../imageFolder/Group1176.png'
import { useState } from 'react';
import PhotoIcon from '../imageFolder/Files.JPG'

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth();
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const PostInput = (props) =>{

    const [selectedFile, setSelectedFile] = useState(null);
    const [postTitile , setPostTitile] =useState(""); 
    const [citySummaryText , setCitySummaryText] = useState("");

    const handleFileChange = (e) => {
        e.preventDefault();
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file);
      }
    };
    
     const handlePublish =(e)=>{
        e.preventDefault();
        if(selectedFile!==null && postTitile.trim().length>0 && citySummaryText.trim().length>0)
        {

            props.setCityPostList([...props.cityPostList ,{
                id:crypto.randomUUID(),
                SubTitle:postTitile,
                FileUrl : URL.createObjectURL(selectedFile),
                AboutCityText: citySummaryText,
                CreatingDate: `${day} ${monthNames[month]}`               
            }]);
            props.setShowInputModal(!props.showInputModal);
        }
        else{
            alert("Please Enter the value into the fields");
        }
     }   

    return (
        <div className="modal-containerPost">
            <div className="modal-boxPost">
                <div className='Text-Cancel'>
                    <p id='TexttoCreate'>Create a post</p>
                    <img src={CancelIcon} alt='' style={{cursor:"pointer"}}
                        onClick={() => props.setShowInputModal(!props.showInputModal)}
                    />
                </div>          
                <p id='ExtraText'>Write something for your post</p>
                <div id='Subject'>Subject</div>
                <input type='text' placeholder='Galápagos Islands, Ecuador' 
                id='InputFieldPost'
                    onChange={(e)=>{setPostTitile(e.target.value.trim())}}
                />
                <input type="file" id="fileInput" style={{ display: 'none' }} 
                accept="image/jpeg"
                onChange={handleFileChange} 
                />
                
                <div onClick={() => document.getElementById('fileInput').click()}
                    id='FileInputBtn'
                >

                <img src={PhotoIcon} id='FileIcon' alt=''/>
                <span id='FileInputText'>Add your image</span>
                </div>
                {selectedFile && <p id='SelectedFileText'> Selected File: {selectedFile.name}</p>}
                <div id='SaperatedLine'></div>
                <div id='inputFieldTextHeading'>What’s on your mind?</div>
                <input id='InputFieldPost'placeholder='Type here'
                    onChange={(e)=>setCitySummaryText(e.target.value.trim())}
                />
                <button id='CreateBoardbtnPost' onClick={handlePublish}>Publish</button>
            </div>
        </div>
    );
}

export default PostInput ;