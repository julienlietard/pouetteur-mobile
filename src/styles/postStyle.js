import { StyleSheet } from 'react-native';

const postStyle = StyleSheet.create({
    post: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginVertical: 8,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    postAuthorPhoto: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    postAuthorName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    postBody: {
        fontSize: 16,
        marginBottom: 10,
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    postAttribute: {
        fontSize: 14,
        color: '#777',
    },
    createPostButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -100,
    },

    createPostButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },

    createPostButtonIcon: {
        color: 'white',
        fontSize: 24,
        marginRight: 10,
    },

    createPostButtonBottom: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});

export default postStyle;
