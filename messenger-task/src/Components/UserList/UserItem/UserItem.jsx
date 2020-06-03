import React from 'react';
import s from './UserItem.module.css'
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    const getMessage = () =>{
        if(props.message.length > 50){
            return props.message.substr(0, 50) + '...'
        }else{
            return props.message
        }
    };

    return (
        <NavLink to={`/${props.userId}`}>
            <div className={s.users_wrapper}>
                <div className={s.userAvatar}>
                    <img alt={"user avatar"} src={props.avatar}/>
                </div>
                <div className={s.userInfo}>
                    <h5>{props.name}</h5>
                    <p>{getMessage()}</p>
                </div>
                <div className={s.userDate}>
                    <p>{props.date}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default UserItem