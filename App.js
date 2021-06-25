import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Spartux</Text>
      <StatusBar style="auto" />
      <Text>Login:</Text>
      <input placeholder="username"></input>
      <Text>Password:</Text>
      <input placeholder="password"></input>
      <button>Login bruh</button>
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
