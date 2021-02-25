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
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30 // TODO
  },
});

export default connect()(App);
