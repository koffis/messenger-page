import React from 'react';
import {connect} from "react-redux";
import UserItem from "./UserItem/UserItem";
import s from './UserList.module.css'


class UserList extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.users !== prevProps.users){
            return this.props.users
        }
    }

    users = this.props.users;

    state = {
        search: []
    };

    render() {
        let options;
        if (this.state.search.length) {
            const searchPattern = new RegExp(this.state.search.map(term => `(?=.*${term})`).join(''), 'i');
            options = this.users.filter(option =>
                option.name.match(searchPattern)
            );
        } else {
            options = this.users;
        }

        return (
            <div>
                <div className={s.yourAvatar}>
                    <img alt={'user avatar'}
                         src={'https://p.kindpng.com/picc/s/65-653274_workers-compensation-law-social-security-disability-user-icon.png'}/>
                </div>
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

export default connect(mapStateToProps, {})(UserList);