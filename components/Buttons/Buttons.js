import { View, Text, Pressable } from "react-native"
import { settings } from "../../appSettings"
import { style } from "./Style"

export const TextButtons = {
    Primary(props) {
        return (
            <View style={[style.distance,]}>
                <Pressable style={({ pressed }) => [
                    style.primary,
                    {
                        backgroundColor: pressed ? '#065A8F' : settings.PRIMARY,
                    },
                ]} onPress={props.onPress.bind()}>

                    <Text style={style.primaryText}>{props.title}</Text>
                </Pressable>
            </View>
        )
    },

    Accent(props) {
        return (
            <View style={[style.distance, style.accent]}>
                <Text style={style.accentText}>{props.title}</Text>
            </View>
        )
    },

    Secondary(props) {
        return (
            <View style={[style.distance,]}>
                <Pressable style={({ pressed }) => [
                    style.secondary,
                    {
                        backgroundColor: pressed ? '#CFCFCF' : settings.SECONDARY,
                    },
                ]} onPress={props.onPress.bind()}>

                    <Text style={style.secondaryText}>{props.title}</Text>
                </Pressable>
            </View>
        )
    }
}