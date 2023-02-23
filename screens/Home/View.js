import { View } from "react-native";
import { Inputs } from "../../components/Inputs/Inputs";
import { TextButtons } from "../../components/Buttons/Buttons";
import { http_routes } from "../../http/http-routes";
import { keys } from "../../locales/keys";
import { i18n } from "../../i18n";
import { useEffect, useState } from "react";
import { InterstitialAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';
import { env } from "../../env";
import axios from "axios";
import Informations from "./Components/Informations";
import Spinner from 'react-native-loading-spinner-overlay';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : env.ANDROID_INTERSTITITAL;
const interstitial = InterstitialAd.createForAdRequest(adUnitId, { requestNonPersonalizedAdsOnly: true });

export default function Home() {
    const [city, setCity] = useState('')
    const [informations, setInformations] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setLoaded(true);
        });
        interstitial.load();
        return unsubscribe;
    }, []);

    async function getInformations() {
        setLoading(true)
        await axios.get(http_routes.CURRENT, {
            params: {
                q: city,
                lang: i18n.locale
            }
        }).then(function (response) {
            setInformations(response.data)
        }).catch(function (err) {
            alert(i18n.t(keys.NOT_FOUND))
        });
        setLoading(false)
    }

    function onChangeHandler(e) {
        setCity(e)
    }

    return (
        <>
            <Spinner visible={isLoading} />
            <View>
                <Inputs.Filled placeholder={i18n.t(keys.ENTER_CITY_NAME)} onChangeText={onChangeHandler} />
                <TextButtons.Primary isLoading={isLoading} title={i18n.t(keys.FIND)} onPress={() => {
                    getInformations();
                    if (loaded) {
                        interstitial.show();
                        setLoaded(false)
                    }
                    else {
                        interstitial.load();
                    }
                }} />
                <Informations informations={informations} />
            </View >
        </>

    )
}