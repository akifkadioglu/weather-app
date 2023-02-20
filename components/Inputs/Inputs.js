import { View, TextInput } from "react-native"
import { style } from "./Style"

export const Inputs = {
    Default() {
        return (
            <View style={style.distance}>
                <TextInput style={style.default} />
            </View>
        )
    },
    Filled() {
        return (
            <View style={style.distance}>
                <TextInput style={style.filled} />
            </View>
        )
    },
    Outlined() {
        return (
            <View style={style.distance}>
                <TextInput style={style.outlined} />
            </View>
        )
    },
    Shaped() {
        return (
            <View style={style.distance}>
                <TextInput style={style.shaped} />
            </View>
        )
    }
}