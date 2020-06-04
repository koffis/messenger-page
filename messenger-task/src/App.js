import React from 'react';
import s from './App.module.css';
import UserList from "./Components/UserList/UserList";
import {Route} from "react-router";
import DefaultWindow from "./Components/Dialog/DefaultWindow";
import DialogContainer from "./Components/Dialog/DialogContainer";
import {connect} from "react-redux";
import {getUsers} from "./Redux/users-list-reducer";
import Preloader from "./Components/common/Preloader/Preloader";
import Profile from "./Components/Profile/Profile";
import './global.css'
import './fa/all.css'


class App extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        if (!this.props.users) {
            return (
                <Preloader/>
            );
        }
        return (
            <div className={s.app_wrapper}>
                <div className={s.profile}>
                    <Profile/>
                </div>
                <div className={s.userList}>
                    <UserList/>
                </div>
                <div className={s.dialog}>
                    <Route exact path={'/'} render={() => <DefaultWindow/>}/>
                    <Route path={'/:id'} render={() => <DialogContainer/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    users:state.users.users
});

export default connect(mapStateToProps,{getUsers})(App);
