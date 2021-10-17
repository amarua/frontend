import React from 'react';
import Sidebar from './Sidebar';
import User from './User';
import style from './style.css';;
const Profile = () => {
    return (  
        <React.Fragment>
            <Sidebar/>
            <User/>
        </React.Fragment>
    );
}
 
export default Profile;