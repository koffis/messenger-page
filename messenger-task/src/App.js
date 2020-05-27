import React from 'react';
import s from './App.module.css';
import UserList from "./Components/UserList/UserList";
import Dialog1 from "./Components/Dialog/Dialog1";
import Search from "./Components/Search/Search";
import {Route} from "react-router";
import DefaultWindow from "./Components/Dialog/DefaultWindow";
import Dialog2 from "./Components/Dialog/Dialog2";
import Dialog3 from "./Components/Dialog/Dialog3";
import Dialog4 from "./Components/Dialog/Dialog4";

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
                <Route path={'/dialog/1'} render={()=> <Dialog1/>}/>
                <Route path={'/dialog/2'} render={()=> <Dialog2/>}/>
                <Route path={'/dialog/3'} render={()=> <Dialog3/>}/>
                <Route path={'/dialog/4'} render={()=> <Dialog4/>}/>
            </div>
        </div>
    );
};

export default App;
