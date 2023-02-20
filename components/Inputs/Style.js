import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    distance: {
        margin: 10,
    },
    shaped: {
        paddingHorizontal: 20,
        paddingVertical: 7,
        backgroundColor: '#ddd',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomWidth: 1,
        borderColor: '#aaa',
    },
    default: {
        borderBottomWidth: 1,
        borderColor: '#bbb',
        paddingHorizontal: 15,
    },
    filled: {
        paddingHorizontal: 20,
        paddingVertical: 7,
        backgroundColor: '#ddd',
        borderRadius: 100
    },
    outlined: {
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#bbb'
    },

})