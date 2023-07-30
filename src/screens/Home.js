import React, { useState } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import postStyle from '../styles/postStyle';
import headerStyle from '../styles/headerStyle';
import CreatePostForm from '../components/CreatePostForm';
import PostData from '../utils/data/PostsData';
import UserData from '../utils/data/UsersData';
import PostItem from '../components/PostItem';

const Home = ({ route }) => {
    const user = route.params?.user || UserData[0];
    const navigation = useNavigation();
    const [isCreatingPost, setIsCreatingPost] = useState(false);

    const handleCreatePost = (postBody) => {
        // Générer un ID unique pour le nouveau poste
        const newPostId = PostData.length + 1;

        const newPost = {
            post_id: newPostId,
            user_id: user.user_id,
            post_body: postBody,
            comments: 0,
            upvotes: 0,
            downvotes: 0,
            shares: 0,
        };

        PostData.unshift(newPost);

        setIsCreatingPost(false);
    };

    const handleLogout = () => {
        navigation.navigate('LoginForm');
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={headerStyle.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile', { user: user })}>
                    <View style={headerStyle.profileBubble}>
                        <Image source={user.profile_photo} style={headerStyle.profilePhoto} />
                    </View>
                </TouchableOpacity>
                <TextInput
                    style={headerStyle.searchInput}
                    placeholder="Rechercher"
                    // Ici la gestion de la recherche TODO
                />
            </View>
            <FlatList
                data={PostData}
                renderItem={({ item }) => <PostItem item={item} onAuthorPress={(userId) => navigation.navigate('Profile', { user: UserData.find((user) => user.user_id === userId) })} />}
                keyExtractor={(item) => item.post_id.toString()}
                ListHeaderComponent={
                    <View>
                        {isCreatingPost && <CreatePostForm onCreatePost={handleCreatePost} onCancel={() => setIsCreatingPost(false)} />}
                    </View>
                }
            />
            {!isCreatingPost && (
                <>
                    <TouchableOpacity onPress={() => setIsCreatingPost(true)}>
                        <View style={postStyle.createPostButton}>
                            <Text style={postStyle.createPostButtonIcon}>+</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={postStyle.logoutButtonContainer}>
                        <Button title="Déconnexion" onPress={handleLogout} />
                    </View>
                </>
            )}
        </View>
    );
};

export default Home;
