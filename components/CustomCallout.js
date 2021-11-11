import React from 'react';
import { Callout } from 'react-native-maps';

import { StyleSheet, Text, View } from 'react-native';

const CustomCallout = ({ hunt }) => {
  return (
    <Callout>
      <View>
        <View style={styles.bubble}>
          <Text style={styles.title}>{hunt.name}</Text>
          <Text>{hunt.description}</Text>
        </View>
      </View>
    </Callout>
  );
};

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default CustomCallout;
