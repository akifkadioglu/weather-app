import { View, Text, Image, Linking } from "react-native";
import { style } from "../Style";
import { Feather } from '@expo/vector-icons';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { i18n } from "../../../i18n";
import { keys } from "../../../locales/keys";
import { TextButtons } from "../../../components/Buttons/Buttons";
import { Chip } from "@react-native-material/core";

let moment = require('moment');
import 'moment/locale/tr'

export default function Informations(props) {
    function VisitLocation() {
        Linking.openURL('http://maps.google.com/maps?z=12&t=m&q=loc:' + props.informations.location.lat + "," + props.informations.location.lon)
    }
    return (
        <View>
            {
                props.informations.current != undefined ?
                    <View style={style.board} options={{ fileName: i18n.t(keys.WEATHER_APP), format: "jpg", quality: 0.9 }}>
                        {TempC()}

                        {NameOfPlaceAndStatu()}

                        {TimeOfCity()}

                        {LocationOfPlace()}

                        {WindAndHumidity()}

                        <TextButtons.Secondary title={i18n.t(keys.MAPS)} onPress={VisitLocation} />
                    </View>
                    : <View />
            }
        </View >
    )

    function WindAndHumidity() {
        return <View style={[{ margin: 10 }, style.navbar]}>
            <Chip
                variant="outlined"
                label={i18n.t(props.informations.current.wind_dir) + " / " + props.informations.current.wind_mph + "mph"}
                color="red"
                leading={props => <Feather name="wind" {...props} />} />
            <Chip
                variant="outlined"
                label={props.informations.current.humidity.toString()}
                color="dodgerblue"
                leading={props => <Ionicons name="water-outline" size={24} color="black" {...props} />} />
        </View>;
    }

    function LocationOfPlace() {
        return <View style={style.chipStyle}>
            <Chip
                style={{ marginRight: 20 }}
                variant="outlined"
                label={props.informations.location.country}
                color="black"
                leading={props => <EvilIcons name="location" size={24} {...props} />} />
            <Chip
                variant="outlined"
                label={props.informations.location.region}
                color="black" />
        </View>;
    }

    function TimeOfCity() {
        return <View>
            <View style={style.chipStyle}>
                <Chip
                    variant="outlined"
                    label={moment(props.informations.location.last_updated_epoch).locale(i18n.locale).format('Do MMMM YYYY, dddd HH:mm').toString()}
                    color="teal"
                    leading={props => <Ionicons name="time-outline" size={24} {...props} />} />
            </View>
            <View style={style.chipStyle}>
                <Chip
                    variant="outlined"
                    label={props.informations.location.tz_id}
                    color="teal"
                    leading={props => <Ionicons name="time-outline" size={24} {...props} />} />
            </View>
        </View>;
    }

    function NameOfPlaceAndStatu() {
        return <View>
            <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "500" }}>{props.informations.location.name}</Text>
            <Text style={style.content}>{props.informations.current.condition.text}</Text>
        </View>;
    }

    function TempC() {
        return <View style={style.navbar}>
            <Text style={style.contentPrimaryText}>{props.informations.current.temp_c}°C</Text>
            <View style={style.center}>
                <Image
                    style={{ width: 64, height: 64 }}
                    source={{ uri: "https:" + props.informations.current.condition.icon }} />
            </View>
        </View>;
    }
}