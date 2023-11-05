import './NavBar.css';
const NavBar=(props)=>{

    return (
        <div className="Navbar">
            <div className="Name-Icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.93531 1.08022C10.9396 -3.46269 30.9856 8.57762 30.9856 16.1068C30.9856 23.6359 11.4161 34.9456 4.93531 31.1651C-1.54549 27.3529 -1.06896 5.59137 4.93531 1.08022ZM12.5597 18.8389C12.5597 20.6179 13.0998 22.111 15.546 22.111C15.959 22.111 16.372 22.0157 16.6897 21.8569C17.0391 21.6663 17.2615 21.3804 17.2615 20.9991C17.2615 20.5544 16.9438 20.1414 16.372 20.1414C16.3084 20.1414 16.2767 20.1414 16.1178 20.1732C16.0283 20.1732 15.9489 20.1833 15.8796 20.1921C15.8259 20.1989 15.7782 20.2049 15.7366 20.2049C15.1648 20.2049 14.8471 19.6966 14.8471 18.8071V14.5183H16.2767C17.1662 14.5183 17.325 13.9147 17.325 13.5971C17.325 13.2794 17.1662 12.6758 16.2767 12.6758H14.8471V11.0873C14.8471 10.039 14.0846 9.84836 13.7034 9.84836C13.3222 9.84836 12.5597 10.039 12.5597 11.0873V12.6758H11.7973C10.9078 12.6758 10.7489 13.2794 10.7489 13.5971C10.7489 13.9147 10.9078 14.5183 11.7973 14.5183H12.5597V18.8389Z" fill="#EB4762"/>
                </svg>
            <div id='name'>
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="16" viewBox="0 0 59 16" fill="none">
                <path d="M5.29535 15.1111C2.84917 15.1111 2.3091 13.618 2.3091 11.8389V7.51838H1.54665C0.657133 7.51838 0.498291 6.91477 0.498291 6.59709C0.498291 6.2794 0.657133 5.6758 1.54665 5.6758H2.3091V4.08736C2.3091 3.039 3.07155 2.84839 3.45277 2.84839C3.834 2.84839 4.59644 3.039 4.59644 4.08736V5.6758H6.02603C6.91555 5.6758 7.0744 6.2794 7.0744 6.59709C7.0744 6.91477 6.91555 7.51838 6.02603 7.51838H4.59644V11.8071C4.59644 12.6967 4.91413 13.205 5.48596 13.205C5.58127 13.205 5.70834 13.1732 5.86719 13.1732C6.02603 13.1414 6.0578 13.1414 6.12134 13.1414C6.69317 13.1414 7.01086 13.5544 7.01086 13.9992C7.01086 14.3804 6.78848 14.6663 6.43902 14.8569C6.12134 15.0158 5.70834 15.1111 5.29535 15.1111Z" fill="#717171"/>
                <path d="M13.0468 15.1746C10.2511 15.1746 8.02734 13.1414 8.02734 10.2505C8.02734 7.32778 10.2511 5.38989 13.0468 5.38989C15.8424 5.38989 18.0662 7.32778 18.0662 10.2505C18.098 13.1732 15.8424 15.1746 13.0468 15.1746ZM13.0468 7.29601C11.2042 7.29601 10.3782 8.8209 10.3782 10.2505C10.3782 11.6801 11.236 13.2685 13.0468 13.2685C14.8894 13.2685 15.7153 11.7118 15.7153 10.2505C15.7153 8.78913 14.8894 7.29601 13.0468 7.29601Z" fill="#717171"/>
                <path d="M28.6134 15.0793C28.264 15.0793 27.5015 14.9204 27.5015 13.8721V13.5226H27.4698C26.8344 14.571 25.5954 15.1746 24.2929 15.1746C21.4655 15.1746 19.75 12.9508 19.75 10.2505C19.75 7.51836 21.5926 5.38986 24.2294 5.38986C25.9131 5.38986 26.8344 6.24762 27.3427 6.81945H27.4062V1.48232C27.4062 0.370421 28.1687 0.17981 28.5499 0.17981C28.9311 0.17981 29.6936 0.370421 29.6936 1.48232V13.8721C29.7253 14.9204 28.9629 15.0793 28.6134 15.0793ZM24.7694 13.2685C26.4532 13.2685 27.4698 11.7436 27.4698 10.314C27.4698 8.88441 26.4532 7.29598 24.7694 7.29598C22.9904 7.29598 22.1009 8.82087 22.1009 10.2505C22.1009 11.68 22.9904 13.2685 24.7694 13.2685Z" fill="#717171"/>
                <path d="M40.8444 15.0793C40.4949 15.0793 39.7325 14.9204 39.7325 13.8721V13.5226H39.7007C39.0654 14.571 37.8264 15.1746 36.5239 15.1746C33.6965 15.1746 31.981 12.9508 31.981 10.2505C31.981 7.51836 33.8235 5.38986 36.4603 5.38986C38.1441 5.38986 39.0654 6.24762 39.5737 6.81945H39.6372V1.48232C39.6372 0.370421 40.3996 0.17981 40.7809 0.17981C41.1621 0.17981 41.9245 0.370421 41.9245 1.48232V13.8721C41.9245 14.9204 41.1939 15.0793 40.8444 15.0793ZM37.0004 13.2685C38.6841 13.2685 39.7007 11.7436 39.7007 10.314C39.7007 8.88441 38.6841 7.29598 37.0004 7.29598C35.2214 7.29598 34.3318 8.82087 34.3318 10.2505C34.3318 11.68 35.1896 13.2685 37.0004 13.2685Z" fill="#717171"/>
                <path d="M44.7837 1.48232C44.7837 0.370421 45.5461 0.17981 45.9274 0.17981C46.3086 0.17981 47.071 0.370421 47.071 1.48232V13.8085C47.071 14.9205 46.3086 15.1111 45.9274 15.1111C45.5461 15.1111 44.7837 14.9205 44.7837 13.8085V1.48232Z" fill="#717171"/>
                <path d="M51.6775 11.0129C51.7728 12.3155 52.98 13.3003 54.3143 13.3003C55.2673 13.3003 55.8709 12.9826 56.4428 12.5061C56.7604 12.2519 56.9828 12.1884 57.237 12.1884C57.7453 12.1884 58.1583 12.5696 58.1583 13.1097C58.1583 13.3003 58.0947 13.6497 57.7771 13.9356C56.8875 14.7934 55.8392 15.1746 54.346 15.1746C51.4869 15.1746 49.3901 13.332 49.3901 10.3458C49.3901 7.35955 51.4869 5.38989 54.2825 5.38989C56.5063 5.38989 58.3171 6.66064 58.6983 9.39274C58.7301 9.58335 58.7301 9.71042 58.7301 9.86927C58.7301 10.6635 58.2853 11.0129 57.5229 11.0129H51.6775ZM56.411 9.36097C56.411 8.15376 55.7439 7.13717 54.219 7.13717C52.8529 7.13717 51.741 8.09022 51.6457 9.36097H56.411Z" fill="#717171"/>
                </svg>
            </div>
            </div>
            <div className='Search-btn'>
                <div className='Search-FieldP'>
                    <div className="Search-Field">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 1.25C4.88769 1.25 1.25 4.88769 1.25 9.375C1.25 13.8623 4.88769 17.5 9.375 17.5C11.3937 17.5 13.2404 16.7638 14.6614 15.5453L17.6831 18.5669C17.9271 18.811 18.3229 18.811 18.5669 18.5669C18.811 18.3229 18.811 17.9271 18.5669 17.6831L15.5453 14.6614C16.7638 13.2404 17.5 11.3937 17.5 9.375C17.5 4.88769 13.8623 1.25 9.375 1.25ZM2.5 9.375C2.5 5.57804 5.57804 2.5 9.375 2.5C13.172 2.5 16.25 5.57804 16.25 9.375C16.25 13.172 13.172 16.25 9.375 16.25C5.57804 16.25 2.5 13.172 2.5 9.375Z" fill="#717171"/>
                        </svg>
                        <input type="text" placeholder='Search....' id='Input-Field'></input>
                    </div>
                </div>
                <button className='Btn' onClick={()=> props?.setCreateBoard(!props?.createBoard)}>
                    <div id="btn-img">
                        <svg id="btn-img" xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M11.125 2.5C11.125 2.15482 10.8452 1.875 10.5 1.875C10.1548 1.875 9.875 2.15482 9.875 2.5V9.375H3C2.65482 9.375 2.375 9.65482 2.375 10C2.375 10.3452 2.65482 10.625 3 10.625H9.875V17.5C9.875 17.8452 10.1548 18.125 10.5 18.125C10.8452 18.125 11.125 17.8452 11.125 17.5V10.625H18C18.3452 10.625 18.625 10.3452 18.625 10C18.625 9.65482 18.3452 9.375 18 9.375H11.125V2.5Z" fill="white"/>
                        </svg>
                    </div>
                    Create new board
                </button>
            </div>
        </div>
    )
}

export default NavBar;
