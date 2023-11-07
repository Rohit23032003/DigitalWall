import './Posts.css'


const Posts = (props)=>{
    return (
        <div className="Text-btn">
            <div id="HeadingText">Your posts</div>
            <button className='Btn'  onClick={()=> props.setShowInputModal(!props.showInputModal)}>
                        <svg id="btn-img" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M11.125 2.5C11.125 2.15482 10.8452 1.875 10.5 1.875C10.1548 1.875 9.875 2.15482 9.875 2.5V9.375H3C2.65482 9.375 2.375 9.65482 2.375 10C2.375 10.3452 2.65482 10.625 3 10.625H9.875V17.5C9.875 17.8452 10.1548 18.125 10.5 18.125C10.8452 18.125 11.125 17.8452 11.125 17.5V10.625H18C18.3452 10.625 18.625 10.3452 18.625 10C18.625 9.65482 18.3452 9.375 18 9.375H11.125V2.5Z" fill="white"/>
                        </svg>
                    Create new board
                </button>
                
        </div>
    )
}
export default Posts ;
