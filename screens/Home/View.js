import { View } from "react-native";
import { Inputs } from "../../components/Inputs/Inputs";
import { TextButtons } from "../../components/Buttons/Buttons";
import axios from "axios";
import { http_routes } from "../../http/http-routes";
import { keys } from "../../locales/keys";
import { i18n } from "../../i18n";
import { useState } from "react";
import Informations from "./Components/Informations";
import Spinner from 'react-native-loading-spinner-overlay';

export default function Home() {
    const [city, setCity] = useState('')
    const [informations, setInformations] = useState('')
    const [isLoading, setLoading] = useState(false)
    async function getInformations() {
        setLoading(true)
        await axios.get(http_routes.CURRENT, {
            params: {
                q: city
            }
        }).then(function (response) {
            setInformations(response.data)
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
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
                <TextButtons.Primary isLoading={isLoading} title={i18n.t(keys.FIND)} onPress={getInformations} />
                <Informations informations={informations} />
            </View >
        </>

    )
}