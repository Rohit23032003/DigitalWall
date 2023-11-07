
import './PostInput.css'
import CancelIcon from '../imageFolder/Group1176.png'
import { useState } from 'react';
import PhotoIcon from '../imageFolder/Files.JPG'

const PostInput = (props) =>{

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedFile(file);
      }
    };
  

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
                <input type='text' placeholder='Galápagos Islands, Ecuador' id='InputFieldPost'/>
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
                <div onClick={() => document.getElementById('fileInput').click()}
                    id='FileInputBtn'
                >

                <img src={PhotoIcon} id='FileIcon'/>
                <span id='FileInputText'>Add your image</span>
                </div>
                {selectedFile && <p id='SelectedFileText'> Selected File: {selectedFile.name}</p>}
                <div id='SaperatedLine'></div>
                <div id='inputFieldTextHeading'>What’s on your mind?</div>
                <input id='InputFieldPost'placeholder='Type here'/>
                <button id='CreateBoardbtnPost' >Publish</button>
            </div>
        </div>
    );
}

export default PostInput ;