import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CreatePostForm = ({ onCreatePost }) => {
    const [postBody, setPostBody] = useState('');

    const handleCreatePost = () => {
        if (postBody.trim() !== '') {
            onCreatePost(postBody);
            setPostBody('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Quoi de neuf ?"
                value={postBody}
                onChangeText={(text) => setPostBody(text)}
            />
            <Button title="Publier" onPress={handleCreatePost} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default CreatePostForm;
