import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    board: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 7,
        margin: 20,
    },
    navbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    contentPrimaryText: {
        padding: 15,
        fontWeight: "400",
        fontSize: 45
    },

    content: {
        display:"flex",
        alignItems:"center",
        padding: 15,
        fontWeight: "400",
    },
    divider: {
        borderWidth: 0.7,
        borderColor: "#ccc",
        marginHorizontal: 15
    }
})