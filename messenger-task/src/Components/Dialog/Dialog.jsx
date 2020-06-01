import React from 'react';
import s from './Dialog.module.css'
import DialogItem from "./DialogItem";
import Preloader from "../common/Preloader/Preloader";

const Dialog = (props) => {
    if (!props.dialog) {
        return (
            <Preloader/>
        );
    }

    let addNewMessage = () => {
        props.addMessage(1)
    };

    let updateNewMessageText = (e) => {
        let text = e.target.value;
        props.updateMessageText(text)
    };

    const messagesList = props.dialog.messages.map(message => <DialogItem
        text={message.text}
        author={message.author}
        time={message.time}
        avatar={props.dialog.avatar}
    />);

    return (
        <div>
            <div className={s.userInfoPlace}>
                <img alt={'user avatar'} src={props.dialog.avatar}/>
                <h4>{props.dialog.sender}</h4>
            </div>
            <div className={s.dialogPlace}>
                {messagesList}
            </div>
            <div className={s.messagePlace}>
                <input value={props.newMessageText} onChange={updateNewMessageText} type="text"/><input onClick={() => {
                addNewMessage();
                props.getChakMessage();
            }} type="submit"/>
            </div>
        </div>

    );
};

export default Dialog;