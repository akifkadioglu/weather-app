import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home/View';
import { settings } from './appSettings';
import { routes } from './routes';
require("./http/http-common")

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={settings.PRIMARY} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ animation: settings.ANIMATION }} name={routes.HOME} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}