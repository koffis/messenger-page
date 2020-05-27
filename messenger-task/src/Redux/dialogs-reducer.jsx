import {messageAPI} from "../api/api";

const ADD_MESSAGE1 = 'ADD_MESSAGE1';
const ADD_MESSAGE2 = 'ADD_MESSAGE2';
const ADD_MESSAGE3 = 'ADD_MESSAGE3';
const ADD_MESSAGE4 = 'ADD_MESSAGE4';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialog1: {
        id: 1,
        sender: 'Alice Freeman',
        verified: true,
        avatar: 'https://memepedia.ru/wp-content/uploads/2020/03/soft-girl-6-768x662.png',
        messages: [
            {text: 'Hey, are you hear me??', author: 2, time: '5/26/20, 08:21'},
            {text: 'Sorry, I am very busy', author: 1, time: '5/26/20, 08:24'},
            {text: 'You are the worst!', author: 2, time: '5/26/20, 08:26'}
        ]
    },
    dialog2: {
        id: 2,
        sender: 'Josefina',
        verified: true,
        avatar: 'https://medialeaks.ru/wp-content/uploads/2020/01/egirl.jpg',
        messages: [
            {
                text: 'Quickly come to the meeting room 1B, we have a big server issue',
                author: 2,
                time: '5/25/20, 14:53'
            },
            {text: 'I`m having breakfast right now, can`t you wait for 10 minutes?', author: 1, time: '5/25/20, 14:57'},
            {text: 'We are losing money!Quick!', author: 2, time: '5/25/20, 15:00'}
        ]
    },
    dialog3: {
        id: 3,
        sender: 'Velazquez',
        verified: true,
        avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/regaine-for-men-minoxidil-1584286450.jpg',
        messages: [
            {text: 'Hello mate', author: 2, time: '5/24/20, 17:10'},
            {text: 'Quickly come to the meeting room 1B, we have a big server issue', author: 2, time: '5/25/20, 17:11'}
        ]
    },
    dialog4: {
        id: 4,
        sender: 'Barrera',
        verified: false,
        avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/01/0d533c829b0a3b7456814f7a4de8fa53.jpg',
        messages: [
            {text: 'Hello! Don`t you want to buy our new fridge?', author: 2, time: '5/23/20, 16:10'},
        ]
    },
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE1:
            let newMessage = {
                text: state.newMessageText,
                author: action.author,
                time: '5/27/20, 16:10'
            };
            return {
                ...state,
                dialog1: {
                    id: 1,
                    sender: 'Alice Freeman',
                    verified: true,
                    avatar: 'https://memepedia.ru/wp-content/uploads/2020/03/soft-girl-6-768x662.png',
                    messages: [...state.dialog1.messages, newMessage]
                },
                newMessageText: ''
            };
        case ADD_MESSAGE2:
            let newMessage2 = {
                text: state.newMessageText,
                author: action.author,
                time: '5/27/20, 16:10'
            };
            return {
                ...state,
                dialog2: {
                    id: 2,
                    sender: 'Josefina',
                    verified: true,
                    avatar: 'https://medialeaks.ru/wp-content/uploads/2020/01/egirl.jpg',
                    messages: [...state.dialog2.messages, newMessage2]
                },
                newMessageText: ''
            };
        case ADD_MESSAGE3:
            let newMessage3 = {
                text: state.newMessageText,
                author: action.author,
                time: '5/27/20, 16:10'
            };
            return {
                ...state,
                dialog3: {
                    id: 3,
                    sender: 'Velazquez',
                    verified: true,
                    avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/regaine-for-men-minoxidil-1584286450.jpg',
                    messages: [...state.dialog3.messages, newMessage3]
                },
                newMessageText: ''
            };
        case ADD_MESSAGE4:
            let newMessage4 = {
                text: state.newMessageText,
                author: action.author,
                time: '5/27/20, 16:10'
            };
            return {
                ...state,
                dialog4: {
                    id: 4,
                    sender: 'Barrera',
                    verified: false,
                    avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/01/0d533c829b0a3b7456814f7a4de8fa53.jpg',
                    messages: [...state.dialog4.messages, newMessage4]
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
export const AddMessage1 = (author) => ({type: ADD_MESSAGE1, author});
export const AddMessage2 = (author) => ({type: ADD_MESSAGE2, author});
export const AddMessage3 = (author) => ({type: ADD_MESSAGE3, author});
export const AddMessage4 = (author) => ({type: ADD_MESSAGE4, author});

export const getChakMessage1 = () => async (dispatch) =>{
    let response = await messageAPI.getResponse();
    dispatch(updateMessageText(response.data.value));
    dispatch(AddMessage1(2))
};
export const getChakMessage2 = () => async (dispatch) =>{
    let response = await messageAPI.getResponse();
    dispatch(updateMessageText(response.data.value));
    dispatch(AddMessage2(2))
};
export const getChakMessage3 = () => async (dispatch) =>{
    let response = await messageAPI.getResponse();
    dispatch(updateMessageText(response.data.value));
    dispatch(AddMessage3(2))
};
export const getChakMessage4 = () => async (dispatch) =>{
    let response = await messageAPI.getResponse();
    dispatch(updateMessageText(response.data.value));
    dispatch(AddMessage4(2))
};

export default dialogsReducer;


