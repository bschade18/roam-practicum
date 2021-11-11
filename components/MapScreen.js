import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';

import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { client } from '../utils/api-client';

const MapScreen = () => {
  const [status, setStatus] = React.useState('idle');
  const [data, setData] = useState();
  const [error, setError] = React.useState();

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  useEffect(() => {
    client(
      'https://www.letsroam.com/coding-challenge-endpoint?password=81j2jj210a9'
    ).then(
      (responseData) => {
        setData(responseData);
        setStatus('success');
      },
      (errorData) => {
        setError(errorData);
        setStatus('error');
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
      >
        {isError && <Text>There was an error: {error.message}</Text>}
        {isSuccess &&
          data.map((hunt, index) => {
            let latitude;
            let longitude;
            if (hunt.lat_long) {
              [latitude, longitude] = hunt.lat_long.split(',');
              latitude = Number(latitude);
              longitude = Number(longitude);

              return (
                <Marker
                  key={index}
                  coordinate={{ latitude, longitude }}
                  title={hunt.name}
                  description={hunt.description}
                >
                  <Callout>
                    <View>
                      <View style={styles.bubble}>
                        <Text style={styles.title}>{hunt.name}</Text>
                        <Text>{hunt.description}</Text>
                      </View>
                    </View>
                  </Callout>
                </Marker>
              );
            }
          })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
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

export default MapScreen;
