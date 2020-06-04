import React from 'react';
import s from './Dialog.module.css'
import DialogItem from "./DialogItem";
import Preloader from "../common/Preloader/Preloader";
import ScrollToBottom from 'react-scroll-to-bottom';


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
                    <p>{props.dialog.sender}</p>
                    <div className={s.line}>
                        <hr/>
                    </div>
                </div>
                <div className={s.chat}>
                    <div className={s.emptyChat}>
                        <h>No messages here yet...</h>
                    </div>
                </div>
                <div className={s.line}>
                    <hr/>
                </div>
                <div className={s.messagePlace}>
                    <div className="text_wrapper">
                        <input className="text_input" type="text" name="" placeholder="Type your message"
                               value={props.newMessageText} onChange={updateNewMessageText}/>
                        <div className="text_icon">
                            {props.newMessageText.length === 0
                                ? <button className={s.messageButton} disabled><i className="fas fa-paper-plane"/></button>
                                : <button
                                    className={s.messageButton}
                                    onClick={() => {
                                        addNewMessage();
                                        props.getChakMessage(props.dialog.id)
                                    }} type="submit"><i className="fas fa-paper-plane"/></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (

                <div>
                    <div className={s.userInfoPlace}>
                        <img alt={'user avatar'} src={props.dialog.avatar}/>
                        <p>{props.dialog.sender}</p>
                    </div>
                    <div className={s.line}>
                        <hr/>
                    </div>
                    <ScrollToBottom className={s.chat}>
                        <div className={s.dialogPlace}>
                            {messagesList}
                        </div>
                    </ScrollToBottom>
                    <div className={s.bottom_line}>
                        <hr/>
                    </div>
                    <div className={s.messagePlace}>
                        <div className="text_wrapper">
                            <input className="text_input" type="text" placeholder="Type your message"
                                   value={props.newMessageText} onChange={updateNewMessageText}/>
                            <div className="text_icon">
                                {props.newMessageText.length === 0
                                    ? <button className={s.messageButton} disabled><i className="fas fa-paper-plane"/></button>
                                    : <button
                                        className={s.messageButton}
                                        onClick={() => {
                                            addNewMessage();
                                            props.getChakMessage(props.dialog.id)
                                        }} type="submit"><i className="fas fa-paper-plane"/></button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
};

export default Dialog;