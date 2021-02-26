import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getInitialData } from './actions/shared';

import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign, Ionicons, Foundation } from '@expo/vector-icons';

import Home from './screens/Home';
import NewDeck from './screens/NewDeck';

const HomeTabNavigator = createBottomTabNavigator();

const HomeIconRender = (props) => Platform.OS === 'ios' ? 
  <AntDesign name="home" size={24} {...props} /> : 
  <Ionicons name="md-home" size={24} { ...props } />;

const NewDeckIconRender = (props) => Platform.OS === 'ios' ?
  <AntDesign name="addfolder" size={24} { ...props } /> :
  <Foundation name="folder-add" size={24} { ...props } />;

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getInitialData())
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        animated
        barStyle="light-content"
        showHideTransition="slide"
        backgroundColor="#6a0dad"
        style="auto"
      />
      <NavigationContainer>
        <HomeTabNavigator.Navigator 
          tabBarOptions={{ activeTintColor: '#6a0dad', inactiveTintColor: '#a9a9a9' }}
        >
          <HomeTabNavigator.Screen 
            name="Home"
            component={Home}
            options={ { title: "Home", tabBarIcon: HomeIconRender } }
          />
          <HomeTabNavigator.Screen 
            name="NewDecK"
            component={NewDeck}
            options={ { title: "New Deck", tabBarIcon: NewDeckIconRender } }
          />
        </HomeTabNavigator.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default connect()(App);
