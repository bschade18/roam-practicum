import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { client } from './utils/api-client';

export default function App() {
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
      {isError && <Text>There was an error</Text>}
      {isSuccess && <Text>Let's Roam!!!!</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
