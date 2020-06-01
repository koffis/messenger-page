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
            let newMessage = {
                text: state.newMessageText,
                author: action.author,
                time: '5/27/20, 16:10'
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

export const getDialog = (id) => async (dispatch) =>{
    let response = await dialogAPI.getDialog(id);
    dispatch(setDialog(response.data.dialog))
};

export const getChakMessage = () => async (dispatch) =>{
    let response = await messageAPI.getResponse();
    dispatch(updateMessageText(response.data.value));
    dispatch(addMessage(2))
};

export default dialogsReducer;


