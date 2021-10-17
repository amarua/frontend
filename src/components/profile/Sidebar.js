import React from 'react';
import {useEffect} from 'react';
const Sidebar = () => {
    useEffect(()=>{
        let sidebar = document.querySelector(".sidebar");
        let closeBtn = document.querySelector("#btn");
        let searchBtn = document.querySelector(".bx-search");

        closeBtn.addEventListener("click", ()=>{
            sidebar.classList.toggle("open");
            menuBtnChange();//calling the function(optional)
        });

        searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
            sidebar.classList.toggle("open");
            menuBtnChange(); //calling the function(optional)
        });

        // following are the code to change sidebar button(optional)
        function menuBtnChange() {
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns className
        }else {
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns className
        }
        }
    });

    return ( 
        <React.Fragment>
        <div className="sidebar">
            <div className="logo-details">
                <div className="logo_name">Ready2Hire</div>
                <i className='bx bx-menu' id="btn" ></i>
            </div>
            <ul className="nav-list">
            <li>
                <i className='bx bx-search' ></i>
                <input type="text" placeholder="Search..."/>
                <span className="tooltip">Search</span>
            </li>
            <li>
                <a href="#">
                <i className='bx bx-grid-alt'></i>
                <span className="links_name">Profile</span>
                </a>
                <span className="tooltip">Profile</span>
            </li>
            <li>
            <a href="#">
                <i className='bx bx-chat' ></i>
                <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
            </li>

            <li>
            <a href="#">
                <i className='bx bx-cog' ></i>
                <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
            </li>
            <li className="profile">
                <div className="profile-details">
                <div className="name_job">
                    <div className="name">Log-Out</div>
                </div>
                </div>
                <i className='bx bx-log-out' id="log_out" ></i>
            </li>
            </ul>
        </div>
        </React.Fragment>
     );
}
 
export default Sidebar;