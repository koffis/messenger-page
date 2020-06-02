const CHANGE_LAST_MESSAGE = 'CHANGE_LAST_MESSAGE';

let initialState = {
    users: [
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
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LAST_MESSAGE:
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

export const changeLastMessage = (id, text) => ({type: CHANGE_LAST_MESSAGE, id, text});

export default usersReducer;


