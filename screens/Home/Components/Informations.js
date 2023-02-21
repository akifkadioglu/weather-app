import { View, Text, Image, Linking } from "react-native";
import { style } from "../Style";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

let moment = require('moment');
import 'moment/locale/tr'
import { i18n } from "../../../i18n";
import { keys } from "../../../locales/keys";
import { TextButtons } from "../../../components/Buttons/Buttons";

export default function Informations(props) {
    /*     const props.informations = JSON.parse('{"current": {"cloud": 0, "condition": {"code": 1000, "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png", "text": "Sunny"}, "feelslike_c": 11.9, "feelslike_f": 53.5, "gust_kph": 6.1, "gust_mph": 3.8, "humidity": 35, "is_day": 1, "last_updated": "2023-02-21 14:45", "last_updated_epoch": 1676979900, "precip_in": 0, "precip_mm": 0, "pressure_in": 30.15, "pressure_mb": 1021, "temp_c": 12, "temp_f": 53.6, "uv": 5, "vis_km": 10, "vis_miles": 6, "wind_degree": 10, "wind_dir": "N", "wind_kph": 3.6, "wind_mph": 2.2}, "location": {"country": "Turkey", "lat": 37.77, "localtime": "2023-02-21 14:53", "localtime_epoch": 1676980402, "lon": 29.09, "name": "Denizli", "region": "Denizli", "tz_id": "Europe/Istanbul"}}')
    */
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
                            <View style={{display:"flex",alignItems:"center"}}>
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
                        <Text style={style.content}>{moment(props.informations.location.localtime).locale(i18n.locale).format('Do MMMM YYYY, dddd HH:mm').toString()}</Text>
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