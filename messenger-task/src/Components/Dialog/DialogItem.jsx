import React from 'react';
import s from './DialogItem.module.css'

const DialogItem = (props) => {
    if(props.author === 1){
        return (
            <div className={s.myMessage}>
                <p>{props.text}</p>
                <p>{props.time}</p>
            </div>
        )
    } else {
        return (
            <div className={s.messages}>
                <div className={s.userImage}>
                    <img alt={'user avatar'} src={props.avatar}/>
                </div>
                <div className={s.userMessage}>
                    <p>{props.text}</p>
                    <p>{props.time}</p>
                </div>
            </div>

        )
    }

};

export default DialogItem;