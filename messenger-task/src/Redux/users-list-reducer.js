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
                users: action.payload
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

export default usersReducer;


