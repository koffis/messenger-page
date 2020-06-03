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

    let now = new Date();
    let currentTime = now.getMonth() + 1 + '/' + now.getDate() + '/' + now.getFullYear() + ', ' + now.getHours() + ":" + now.getMinutes();

    let addNewMessage = () => {
        props.sendNewMessage(props.dialog.id, {
            text: props.newMessageText,
            author: 1,
            time: currentTime
        })
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

    if (props.dialog.messages.length === 0) {
        return (
            <div>
                <div className={s.userInfoPlace}>
                    <img alt={'user avatar'} src={props.dialog.avatar}/>
                    <h4>{props.dialog.sender}</h4>
                </div>
                <div className={s.dialogPlace}>
                    <h4><i>You have no dialog with this user yet.</i></h4>
                </div>
                <div className={s.messagePlace}>
                    <input value={props.newMessageText} onChange={updateNewMessageText} placeholder="Type your message"
                           type="text"/>{props.newMessageText.length === 0
                    ? <input type={'submit'} disabled/>
                    : <input
                        onClick={() => {
                            addNewMessage();
                            props.getChakMessage(props.dialog.id)
                        }} type="submit"><i className="fad fa-paper-plane"/></input>
                }
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className={s.userInfoPlace}>
                    <img alt={'user avatar'} src={props.dialog.avatar}/>
                    <h4>{props.dialog.sender}</h4>
                </div>
                <div className={s.chat}>
                    <div className={s.dialogPlace}>
                        {messagesList}
                    </div>
                </div>
                <div className={s.messagePlace}>
                    <div className="text_wrapper">
                        <input className="text_input" type="text" name="" placeholder="Type your message"
                               value={props.newMessageText} onChange={updateNewMessageText}/>
                        <div className="text_icon">
                            {props.newMessageText.length === 0
                                ? <button disabled><i className="fas fa-paper-plane"/></button>
                                : <button
                                    onClick={() => {
                                        addNewMessage();
                                        props.getChakMessage(props.dialog.id)
                                    }} type="submit"><i className="fas fa-paper-plane"/>Sand</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Dialog;