import { View, Text } from "react-native"
import { style } from "./Style"

export const TextButtons = {
    Primary(props) {
        return (
            <View style={[style.distance, style.primary]}>
                <Text style={style.primaryText}>{props.title}</Text>
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
            <View style={[style.distance, style.secondary]}>
                <Text style={style.secondaryText}>{props.title}</Text>
            </View>
        )
    }
}