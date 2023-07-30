import { StyleSheet } from 'react-native';

const profileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    profileBubble: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#b9b4af',
    },
    profilePhoto: {
        width: 45,
        height: 45,
        borderRadius: 45,
    },
    searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#fff',
        marginLeft: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
    },
    post: {
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 5,
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
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    postAttribute: {
        fontSize: 14,
    },
});

export default profileStyle;
