const UserData = [
    {
        user_id: 1,
        pseudo: 'admin',
        email: 'admin@example.com',
        password: 'dev',
        profile_photo: require('../../assets/images/admin_1.png'),
        cover_photo: require('../../assets/images/admin_2.jpg'),
        bio: 'dev',
        followers: 100,
        following: 50,
    },
    {
        user_id: 2,
        pseudo: 'user2',
        email: 'user2@example.com',
        password: 'dev',
        profile_photo: require('../../assets/images/user2_1.png'),
        cover_photo: require('../../assets/images/user2_2.jpg'),
        bio: 'Je suis utilisateur 2.',
        followers: 80,
        following: 30,
    },
];

export default UserData;
