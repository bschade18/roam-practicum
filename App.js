import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import * as WebBrowser from 'expo-web-browser';
import MapScreen from './components/MapScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
      <Pressable
        style={styles.button}
        title="Open Blog"
        onPress={() =>
          WebBrowser.openBrowserAsync('http://letsroam.com/explorer/')
        }
      >
        <Text style={styles.text}>Open Blog</Text>
      </Pressable>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    marginTop: 200,
  },
  text: {
    color: 'white',
  },
});
