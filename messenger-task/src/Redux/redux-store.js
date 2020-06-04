import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import usersReducer from "./users-list-reducer";
import dialogsReducer from "./dialogs-reducer";


let reducers = combineReducers({
    users: usersReducer,
    dialogs: dialogsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;