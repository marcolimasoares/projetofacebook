import { StyleSheet, Dimensions, TouchableWithoutFeedbackBase } from "react-native";

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end',
    },

    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: height - 50,
        width: width,
    },

    heart: {
        color: 'white',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 1,
    },

    header1: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    likeContainer: {
        backgroundColor: '#4267b2',
        width: 24,
        height: 24,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },

    heartContainer: {
        marginLeft: -8,
        backgroundColor: 'red',
        width: 24,
        height: 24, 
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    like: {
        color: 'white',
    },

    likeCounter: {
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
    },

    inputContainer: {
        padding: 16,
    },

    input: { 
        width: '100%',
        height: 48,
        borderRadius: 20,
        backgroundColor: '#d8d8d8',
        borderWidth: 1,
        padding: 10,
    },

    comments: {
        flex: 1,
    },
});