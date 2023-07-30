import { StyleSheet } from 'react-native';

const headerStyle = StyleSheet.create({
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
});

export default headerStyle;
