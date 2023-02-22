import { View, Text, Image, Linking } from "react-native";
import { style } from "../Style";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { i18n } from "../../../i18n";
import { keys } from "../../../locales/keys";
import { TextButtons } from "../../../components/Buttons/Buttons";

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
                    <View style={style.board}>
                        <View style={style.navbar}>
                            <Text style={style.contentPrimaryText}>{props.informations.current.temp_c}°C</Text>
                            <View style={{ display: "flex", alignItems: "center" }}>
                                <Image
                                    style={{ width: 64, height: 64 }}
                                    source={{ uri: "https:" + props.informations.current.condition.icon }}
                                />
                                <Text>{props.informations.current.condition.text}</Text>
                            </View>
                        </View>
                        <View style={style.divider} />
                        <Text style={style.content}>{props.informations.location.tz_id}</Text>
                        <Text style={style.content}>{props.informations.location.country} / {props.informations.location.region} / {props.informations.location.name}</Text>
                        <Text style={style.content}>{moment(props.informations.location.last_updated_epoch).locale(i18n.locale).format('Do MMMM YYYY, dddd HH:mm').toString()}</Text>
                        <View style={[style.navbar, style.content]}>
                            <Feather name="wind" size={24} color="black" />
                            <Text style={style.content}>{i18n.t(props.informations.current.wind_dir)} / {props.informations.current.wind_degree}° / {props.informations.current.wind_mph}mph</Text>
                        </View>
                        <View style={[style.navbar, style.content]}>
                            <MaterialCommunityIcons name="air-humidifier" size={24} color="black" />
                            <Text style={style.content}>{props.informations.current.humidity} </Text>
                        </View>
                        <TextButtons.Secondary title={i18n.t(keys.MAPS)} onPress={VisitLocation} />
                    </View>
                    : <View />
            }
        </View >
    )
}