import {dialogAPI, messageAPI} from "../api/api";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SET_DIALOG = 'SET_DIALOG';
let now = new Date();
let currentTime = now.getMonth() + 1 + '/' + now.getDate() + '/' + now.getFullYear() + ', ' + now.getHours() + ":" + now.getMinutes();


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
export const setDialog = (payload) => ({type: SET_DIALOG, payload});

export const getDialog = (id) => async (dispatch) => {
    let response = await dialogAPI.getDialog(id);
    dispatch(setDialog(response.data.dialog))
};

export const sendNewMessage = (id, message) => (dispatch) => {
    messageAPI.sendMessage(id, message).then(
        dispatch(getDialog(id))
    );
};

export const getChakMessage = (id) => (dispatch) => {
    messageAPI.getResponse()
        .then(response => dispatch(sendNewMessage(id, {
                text: response.data.value,
                author: 2,
                time: currentTime
            }))).then(dispatch(getDialog(id)));
};

export default dialogsReducer;


