import React from 'react';
import s from './Dialog.module.css'
import {connect} from "react-redux";
import DialogItem from "./DialogItem";
import {AddMessage4, getChakMessage3, getChakMessage4, updateMessageText} from "../../Redux/dialogs-reducer";

const Dialog4 = (props) => {

    let addNewMessage = () =>{
        props.AddMessage4(1)
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
                    props.getChakMessage4()
                }} type="submit"/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>({
    dialog: state.dialogs.dialog4,
    newMessageText: state.dialogs.newMessageText
});

export default connect(mapStateToProps,{AddMessage4, updateMessageText, getChakMessage4})(Dialog4);