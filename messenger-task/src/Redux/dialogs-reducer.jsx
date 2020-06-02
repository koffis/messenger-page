import {dialogAPI, messageAPI} from "../api/api";

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SET_DIALOG = 'SET_DIALOG';

let initialState = {
    dialog: null,
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOG:
            return {
                ...state,
                dialog: action.payload
            };
        case ADD_MESSAGE:
            let now = new Date();
            let currentTime = now.getMonth() + 1 + '/' + now.getDate() + '/' + now.getFullYear() + ', ' + now.getHours() + ":" + now.getMinutes();
            let newMessage = {
                text: state.newMessageText,
                author: action.author,
                time: currentTime
            };
            return {
                ...state,
                dialog: {
                    id: state.dialog.id,
                    sender: state.dialog.sender,
                    verified: state.dialog.verified,
                    avatar: state.dialog.avatar,
                    messages: [...state.dialog.messages, newMessage]
                },
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            };
        default:
            return state;
    }
};

export const updateMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text});
export const addMessage = (author) => ({type: ADD_MESSAGE, author});
export const setDialog = (payload) => ({type: SET_DIALOG, payload});

export const getDialog = (id) => async (dispatch) => {
    let response = await dialogAPI.getDialog(id);
    dispatch(setDialog(response.data.dialog))
};

export const sendNewMessage = (id, message) => (dispatch) => {
    messageAPI.sendMessage(id, message);
};

let now = new Date();
let currentTime = now.getMonth() + 1 + '/' + now.getDate() + '/' + now.getFullYear() + ', ' + now.getHours() + ":" + now.getMinutes();

export const getChakMessage = (id) => async (dispatch) => {
    let response = await messageAPI.getResponse();
    dispatch(sendNewMessage(id, {
        text: response.data.value,
        author: 2,
        time: currentTime
    }));
};

export default dialogsReducer;


