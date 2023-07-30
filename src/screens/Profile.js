import React from 'react';
import { View, Text, ImageBackground, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import profileStyle from '../styles/profileStyle';
import PostData from '../utils/data/PostsData';
import UserData from '../utils/data/UsersData';
import PostItem from '../components/PostItem';

const Profile = ({ route }) => {
    const user = route.params?.user || UserData[0];
    const navigation = useNavigation();

    const getAuthorInfo = (userId) => {
        return UserData.find((user) => user.user_id === userId);
    };

    const renderItem = ({ item }) => {
        const author = getAuthorInfo(item.user_id);

        return (
            <PostItem
                author={author}
                postBody={item.post_body}
                comments={item.comments}
                upvotes={item.upvotes}
                downvotes={item.downvotes}
                shares={item.shares}
            />
        );
    };

    return (
        <View style={profileStyle.container}>
            <ImageBackground source={user.cover_photo} style={profileStyle.coverPhoto} resizeMode="cover">
                <View style={profileStyle.profileHeader}>
                    <Image source={user.profile_photo} style={profileStyle.profilePhoto} />
                    <Text style={profileStyle.profilePseudo}>{user.pseudo}</Text>
                </View>
            </ImageBackground>

            <Text style={profileStyle.bio}>{user.bio}</Text>

            <View style={profileStyle.followInfo}>
                <Text style={profileStyle.followText}>Followers: {user.followers}</Text>
                <Text style={profileStyle.followText}>Following: {user.following}</Text>
            </View>

            <Text style={profileStyle.postsTitle}>Posts</Text>
            <FlatList
                data={PostData.filter((item) => item.user_id === user.user_id)}
                renderItem={renderItem}
                keyExtractor={(item) => item.post_id.toString()}
            />
        </View>
    );
};

export default Profile;
