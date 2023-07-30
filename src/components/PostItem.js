import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import postStyle from '../styles/postStyle';
import UserData from '../utils/data/UsersData';

const PostItem = ({ item, onAuthorPress }) => {
    const navigation = useNavigation();
    const author = UserData.find((user) => user.user_id === item.user_id);

    const handleAuthorPress = () => {
        if (onAuthorPress) {
            onAuthorPress(author.user_id);
        } else {
            navigation.navigate('Profile', { user: author });
        }
    };

    return (
        <TouchableOpacity onPress={handleAuthorPress}>
            <View style={postStyle.post}>
                <TouchableOpacity onPress={handleAuthorPress}>
                    <View style={postStyle.postHeader}>
                        <Image source={author.profile_photo} style={postStyle.postAuthorPhoto} />
                        <Text style={postStyle.postAuthorName}>{author.pseudo}</Text>
                    </View>
                </TouchableOpacity>
                <Text style={postStyle.postBody}>{item.post_body}</Text>
                <View style={postStyle.postFooter}>
                    <Text style={postStyle.postAttribute}>Comments: {item.comments}</Text>
                    <Text style={postStyle.postAttribute}>Upvotes: {item.upvotes}</Text>
                    <Text style={postStyle.postAttribute}>Downvotes: {item.downvotes}</Text>
                    <Text style={postStyle.postAttribute}>Shares: {item.shares}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default PostItem;
