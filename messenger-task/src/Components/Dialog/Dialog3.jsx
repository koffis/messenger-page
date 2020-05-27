import React from 'react';
import s from './Dialog.module.css'
import {connect} from "react-redux";
import DialogItem from "./DialogItem";
import {AddMessage3, getChakMessage3, updateMessageText} from "../../Redux/dialogs-reducer";

const Dialog3 = (props) => {
    let addNewMessage = () =>{
        props.AddMessage3(1)
    };

    let updateNewMessageText = (e) =>{
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
                <input value={props.newMessageText} onChange={updateNewMessageText} type="text"/><input onClick={()=>{
                    addNewMessage();
                    props.getChakMessage3();
                }} type="submit"/>
            </div>
        </div>

    );
};

const mapStateToProps = (state) =>({
    dialog: state.dialogs.dialog3,
    newMessageText: state.dialogs.newMessageText
});

export default connect(mapStateToProps,{AddMessage3, updateMessageText, getChakMessage3})(Dialog3);