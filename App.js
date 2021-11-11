import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import * as WebBrowser from 'expo-web-browser';
import MapScreen from './components/MapScreen';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 40,
            marginHorizontal: 125,
            height: 60,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}
      >
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabContainer}>
                <FontAwesome5
                  name="map-marker-alt"
                  size={25}
                  color={focused ? 'black' : 'gray'}
                ></FontAwesome5>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      <Pressable
        style={styles.button}
        title="Open Blog"
        onPress={() =>
          WebBrowser.openBrowserAsync('http://letsroam.com/explorer/')
        }
      >
        <View style={styles.blogIconContainer}>
          <FontAwesome5 name="book" size={25} color="gray"></FontAwesome5>
        </View>
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
    position: 'absolute',
    bottom: 58,
    marginLeft: 200,
  },
  tabContainer: {
    position: 'absolute',
    top: '50%',
    left: '15%',
  },
  blogIconContainer: {
    position: 'absolute',
    top: '50%',
  },
  text: {
    color: 'white',
  },
});
