import {userAPI} from "../api/api";

const SET_LAST_MESSAGE = 'SET_LAST_MESSAGE';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload.sort(function (first, second) {
                    return second.time-first.time
                })
            };
        case SET_LAST_MESSAGE:
            if (state.users[0].userId === action.id) {
                return {
                    ...state,
                    ...state.users[0].message = action.text
                }
            }
        default:
            return state;
    }
};

export const setUsers = (payload) => ({type: SET_USERS, payload});

export const getUsers = () => async (dispatch) =>{
    let response = await userAPI.getUsers();
    dispatch(setUsers(response.data.users))
};

export const setLastMessage = (id, message, date, time) => (dispatch) => {
    userAPI.lastMessage(id, message, date, time).then(
        dispatch(getUsers())
    )
};

export default usersReducer;


