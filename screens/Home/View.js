import { View, Text, Button } from "react-native";
import { Inputs } from "../../components/Inputs/Inputs";
import { TextButtons } from "../../components/Buttons/Buttons";
import axios from "axios";
import { http_routes } from "../../http/http-routes";
import { env } from "../../env";
export default function Home() {

    function getInformations() {
        axios.get(http_routes.CURRENT, {
            params: {
                q: "izmir"
            }
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <View>
            <Inputs.Filled />
            <TextButtons.Primary title="Deneme" />
            <TextButtons.Accent title="Deneme" />
            <TextButtons.Secondary title="Deneme" />
            <Button title="goAbout" onPress={getInformations}></Button>
        </View >
    )
}