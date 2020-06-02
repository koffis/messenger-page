let initialState = {
    profile: {
        userProfile:{
            name: 'Yaroslav Kravchenko',
            avatar: 'https://p.kindpng.com/picc/s/65-653274_workers-compensation-law-social-security-disability-user-icon.png',
            status: 'I create this messenger as a test task',
            age: 20,
            location: 'Ukraine Lviv',
            work: 'Student'
        },
        AliceFreeman:{
            name: 'Alice Freeman',
            avatar: 'https://memepedia.ru/wp-content/uploads/2020/03/soft-girl-6-768x662.png',
            status: 'Angry girl in beautiful glasses',
            age: 18,
            location: 'Ukraine Lviv',
            work: 'Student'
        },
        Josefina:{
            name: 'Josefina',
            avatar: 'https://medialeaks.ru/wp-content/uploads/2020/01/egirl.jpg',
            status: 'Tech Lead in Reenbit',
            age: 27,
            location: 'Ukraine Lviv',
            work: 'Reenbit'
        },
        Velazquez:{
            name: 'Velazquez',
            avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/regaine-for-men-minoxidil-1584286450.jpg',
            status: 'Middle Front-end dev in very friendly team',
            age: 32,
            location: 'Ukraine Lviv',
            work: 'Reenbit'
        },
        Barrera:{
            name: 'Barrera',
            avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/03/01/0d533c829b0a3b7456814f7a4de8fa53.jpg',
            status: 'I love my life',
            age: 19,
            location: 'Ukraine Lviv',
            work: 'Eldorado'
        },
    }
};

const profileReducer = (state = initialState, action) => {
    return state;
};


export default profileReducer;


