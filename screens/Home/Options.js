import { settings } from "../../appSettings";
import { i18n } from "../../i18n";
import { keys } from "../../locales/keys";


export const HomeOptions = {
    title: i18n.t(keys.WEATHER_APP),
    headerStyle: {
        backgroundColor: settings.PRIMARY,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    animation: settings.ANIMATION,
}