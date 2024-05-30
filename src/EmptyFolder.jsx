import './EmptyFolder.css';
import image from './imageFolder/JournalEmptyIllo.png';
// import image from './imageFolder/empty-folder.png';
const EmptyFolder=()=>{
    return (
        <div id='EmptyFolderContent'>
                        <div id="Empty_Folder_img">
                            <img id="img_Empty" alt="" src={image}/>
                        </div>
                        <div id='Empty_content1'>
                            Nothing here yet
                        </div>
                        <div id='Empty_content2'>
                        Create your first post by clicking on the '+' button above
                        </div>
                    </div>
    )
}

export default EmptyFolder;