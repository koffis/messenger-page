import React from 'react';
import {connect} from "react-redux";
import UserItem from "./UserItem/UserItem";
import s from './UserList.module.css'

const users = [
    {
        name: 'Alice Freeman',
        verified: true,
        date: 'May 26, 2020',
        avatar: 'https://memepedia.ru/wp-content/uploads/2020/03/soft-girl-6-768x662.png',
        userId: 1,
        message: 'You are the worst!'
    },
    {
        name: 'Josefina',
        verified: true,
        date: 'May 25, 2020',
        avatar: 'https://medialeaks.ru/wp-content/uploads/2020/01/egirl.jpg',
        userId: 2,
        message: 'We are losing money!Quick!'
    },
    {
        name: 'Velazquez',
        verified: true,
        date: 'May 24, 2020',
        avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/regaine-for-men-minoxidil-1584286450.jpg',
        userId: 3,
        message: 'Quickly come to the meeting room 1B, we have a big server issue'
    },
    {
        name: 'Barrera',
        verified: false,
        date: 'May 24, 2020',
        avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/01/0d533c829b0a3b7456814f7a4de8fa53.jpg',
        userId: 4,
        message: 'Hello! Don`t you want to buy our new fridge?'
    },
];

class UserList extends React.Component {

    state = {
        search: []
    };

    render() {
        let options;
        if (this.state.search.length) {
            const searchPattern = new RegExp(this.state.search.map(term => `(?=.*${term})`).join(''), 'i');
            options = users.filter(option =>
                option.name.match(searchPattern)
            );
        } else {
            options = users;
        }
        const usersList = this.props.users.map(user => <UserItem
            name={user.name}
            verified={user.verified}
            date={user.date}
            avatar={user.avatar}
            userId={user.userId}
            message={user.message}
        />);

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
                            name={user.name}
                            verified={user.verified}
                            date={user.date}
                            avatar={user.avatar}
                            userId={user.userId}
                            message={user.message}
                        />)}
                    </ul>
                </div>
                {/*<h4>Chats</h4>
                <div>
                    {usersList}
                </div>*/}
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    users: state.users.users
});

export default connect(mapStateToProps, {})(UserList);