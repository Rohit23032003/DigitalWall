
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
    let Editobj = null;
    if(props.EditId!==null){
        
        for(let element of props.cityPostList){
            if(element.id===props.EditId){
                Editobj = element;
                break;
            }
        }
        // Editobj = props.cityPostList.filter((element) => element.id === props.EditId); 
        console.log("Hello"+Editobj);
    }

    const [selectedFile, setSelectedFile] = useState(null);
    const [postTitile , setPostTitile] =useState(Editobj!==null?Editobj.SubTitle:""); 
    const [citySummaryText , setCitySummaryText] = useState(Editobj!==null?Editobj.AboutCityText:"");

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
            if(props.EditId!==null)
            {
                const index = props.cityPostList.findIndex((element)=> element.id === props.EditId);
                const ChangeCityList = [...props.cityPostList];
                const newListItem = {
                    id:props.cityPostList[index].id,
                    SubTitle:postTitile,
                    FileUrl:URL.createObjectURL(selectedFile),
                    AboutCityText:citySummaryText,
                    CreatingDate:props.cityPostList[index].CreatingDate
                }
                ChangeCityList.splice(index , 1 , newListItem);
                props.setCityPostList(ChangeCityList);
                props.setEditId(null);
            }
           else {   
                props.setCityPostList([...props.cityPostList ,{
                    id:crypto.randomUUID(),
                    SubTitle:postTitile,
                    FileUrl : URL.createObjectURL(selectedFile),
                    AboutCityText: citySummaryText,
                    CreatingDate: `${day} ${monthNames[month]}`               
                }]);
            }
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
                        onClick={() =>{ 
                            props.setShowInputModal(!props.showInputModal);
                            props.setEditId(null);
                        }}
                    />
                </div>          
                <p id='ExtraText'>Write something for your post</p>
                <div id='Subject'>Subject</div>
                <input type='text' placeholder='Galápagos Islands, Ecuador' 
                id='InputFieldPost'
                    onChange={(e)=>{setPostTitile(e.target.value.trim())}}
                    value={postTitile}    

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
                    value={citySummaryText}
                />
                <button id='CreateBoardbtnPost' onClick={handlePublish}>Publish</button>
            </div>
        </div>
    );
}

export default PostInput ;
