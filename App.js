import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { getInitialData } from './actions/shared';

import Home from './views/Home';
import { connect } from 'react-redux';

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getInitialData())
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Home />
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

export default connect()(App);
