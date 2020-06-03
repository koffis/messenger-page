import React from 'react';
import s from './DialogItem.module.css'

const DialogItem = (props) => {
    if (props.author === 1) {
        return (<div className={s.message_wrapper}>
                <div className={s.myMessage}>
                    <p>{props.text}</p>
                </div>
                <br/>
                <div className={s.myData}>
                    <p>{props.time}</p>
                </div>
            </div>

        )
    } else {
        return (
            <div className={s.messages}>
                <div className={s.userImage}>
                    <img alt={'user avatar'} src={props.avatar}/>
                </div>
                <div>
                    <div className={s.userMessage}>
                        <p>{props.text}</p>

                    </div>
                    <p className={s.Data}>{props.time}</p>
                </div>
            </div>

        )
    }

};

export default DialogItem;