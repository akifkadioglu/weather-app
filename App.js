import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home/View';
import { settings } from './appSettings';
import { routes } from './routes';
import { HomeOptions } from './screens/Home/Options';
require("./http/http-common")
require('./i18n');

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={settings.PRIMARY} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={HomeOptions} name={routes.HOME} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}