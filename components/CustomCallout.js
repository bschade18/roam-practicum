import React from 'react';
import { Callout } from 'react-native-maps';

import { StyleSheet, Text, View, Dimensions } from 'react-native';

const CustomCallout = ({ hunt: { distance_miles, name, description } }) => {
  const miles = Number(distance_miles).toFixed(2);
  return (
    <Callout>
      <View>
        <View style={styles.bubble}>
          <Text style={styles.title}>{name}</Text>
          <Text>{description}</Text>
          <Text>
            Distance: <Text style={styles.boldText}>{miles}</Text> miles
          </Text>
        </View>
      </View>
    </Callout>
  );
};

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    paddingHorizontal: 30,
    flex: 1,
    width: Dimensions.get('window').width,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default CustomCallout;
