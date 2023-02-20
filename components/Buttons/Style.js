import { StyleSheet } from "react-native";
import { settings } from "../../appSettings";

export const style = StyleSheet.create({
    distance: {
        margin: 10,
    },

    primary: {
        backgroundColor: settings.PRIMARY,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },

    primaryText: {
        color: 'white',
        padding: 10,
        fontWeight: "600"

    },




    accent: {
        backgroundColor: settings.ACCENT,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },

    accentText: {
        color: 'white',
        padding: 10,
        fontWeight: "600"
    },




    secondary: {
        backgroundColor: settings.SECONDARY,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },

    secondaryText: {
        color: 'black',
        padding: 10,
        fontWeight: "600"
    }
})