import React from 'react';
import s from './App.module.css';
import UserList from "./Components/UserList/UserList";
import Search from "./Components/Search/Search";
import {Route} from "react-router";
import DefaultWindow from "./Components/Dialog/DefaultWindow";
import DialogContainer from "./Components/Dialog/DialogContainer";


const App = (props) => {
    return (
        <div className={s.app_wrapper}>
            <div className={s.search}>
                <Search/>
            </div>
            <div className={s.userList}>
                <UserList/>
            </div>
            <div className={s.dialog}>
                <Route path={'/'} render={() => <DefaultWindow/>}/>
                <Route exact path={'/:id'} render={()=> <DialogContainer/>}/>
            </div>
        </div>
    );
};

export default App;
