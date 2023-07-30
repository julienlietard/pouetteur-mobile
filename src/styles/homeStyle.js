import { StyleSheet } from 'react-native';

const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
    },
    profile: {
        alignItems: 'center',
    },
    bio: {
        fontSize: 16,
        marginBottom: 20,
    },
    post: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    postAuthorPhoto: {
        width: 40,
        height: 40,
        borderRadius: 20,
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
        color: '#888',
    },
});

export default homeStyle;
