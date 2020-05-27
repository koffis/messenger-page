import React from 'react';
import {connect} from "react-redux";
import UserItem from "./UserItem/UserItem";

const UserList = (props) => {

    const usersList = props.users.map(user => <UserItem
        name={user.name}
        verified={user.verified}
        date={user.date}
        avatar={user.avatar}
        userId={user.userId}
        message={user.message}
    />);

    return (
        <div>
            <h4>Chats</h4>
            <div>
                {usersList}
            </div>
        </div>

    );
};

const mapStateToProps = (state) =>({
    users: state.users.users
});

export default connect(mapStateToProps,{})(UserList);