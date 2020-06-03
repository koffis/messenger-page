import React from 'react';
import {connect} from "react-redux";
import UserItem from "./UserItem/UserItem";
import s from './UserList.module.css'
import {getUsers} from "../../Redux/users-list-reducer";


class UserList extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.users !== prevProps.users){
            return this.props.users;
        }
    }


    state = {
        search: []
    };

    render() {
        let options;
        if (this.state.search.length) {
            const searchPattern = new RegExp(this.state.search.map(term => `(?=.*${term})`).join(''), 'i');
            options = this.props.users.filter(option =>
                option.name.match(searchPattern)
            );
        } else {
            options = this.props.users;
        }

        return (
            <div>
                <div>
                    <input type="text" onChange={(e) => this.setState({search: e.target.value.split(' ')})}/>
                    <ul>
                        {options.map(user => <UserItem
                            key={user.userId}
                            name={user.name}
                            verified={user.verified}
                            date={user.date}
                            avatar={user.avatar}
                            userId={user.userId}
                            message={user.message}
                        />)}
                    </ul>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users.users
});

export default connect(mapStateToProps, {getUsers})(UserList);