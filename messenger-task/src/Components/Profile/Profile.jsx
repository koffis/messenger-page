import React from "react";
import s from "../UserList/UserList.module.css";

const Profile = (props) =>{
    return(
        <div className={s.yourAvatar}>
            <img alt={'user avatar'}
                 src={'https://p.kindpng.com/picc/s/65-653274_workers-compensation-law-social-security-disability-user-icon.png'}/>
        </div>
    )
};

export default Profile;