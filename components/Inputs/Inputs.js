import { View, TextInput } from "react-native"
import { style } from "./Style"

export const Inputs = {
    Default(props) {
        return (
            <View style={style.distance}>
                <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText.bind()} style={style.default} />
            </View>
        )
    },
    Filled(props) {
        return (
            <View style={style.distance}>
                <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText.bind()} style={style.filled} />
            </View>
        )
    },
    Outlined(props) {
        return (
            <View style={style.distance}>
                <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText.bind()} style={style.outlined} />
            </View>
        )
    },
    Shaped(props) {
        return (
            <View style={style.distance}>
                <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText.bind()} style={style.shaped} />
            </View>
        )
    }
}