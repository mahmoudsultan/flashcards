import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getInitialData } from './actions/shared';

import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { AntDesign, Ionicons, Foundation } from '@expo/vector-icons';

import Home from './screens/Home';
import NewDeck from './screens/NewDeck';
import Deck from './screens/Deck';
import NewQuestion from './screens/NewQuestion';
import Quiz from './screens/Quiz';

const HomeTabNavigator = createBottomTabNavigator();

const HomeIconRender = (props) => Platform.OS === 'ios' ? 
  <AntDesign name="home" size={24} {...props} /> : 
  <Ionicons name="md-home" size={24} { ...props } />;

const NewDeckIconRender = (props) => Platform.OS === 'ios' ?
  <AntDesign name="addfolder" size={24} { ...props } /> :
  <Foundation name="folder-add" size={24} { ...props } />;

const HomeStackNavigator = createStackNavigator();
const NewDeckStackNavigator = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <HomeStackNavigator.Navigator
      mode='card'
      headerMode='float'
      screenOptions={{
        headerStyle: { backgroundColor: '#6a0dad' },
        headerTitleStyle: { color: 'white', textTransform: 'capitalize' },
        headerTintColor: 'white'
      }}
    >
      <HomeStackNavigator.Screen 
        name="Home"
        component={Home}
        options={ { title: 'Home' } }
      />
      <HomeStackNavigator.Screen 
        name="Deck"
        component={Deck}
        options={ ({ route }) => ({ title: route.params.deckId }) }
      />
      <HomeStackNavigator.Screen 
        name="NewQuestion"
        component={NewQuestion}
        options={ ({ route }) => ({ title: `Add Question: ${route.params.deckId}` }) }
      />
      <HomeStackNavigator.Screen 
        name="Quiz"
        component={Quiz}
        options={ ({ route }) => ({ title: `Quiz: ${route.params.deckId}` }) }
      />
    </HomeStackNavigator.Navigator>
  );
};

const NewDeckStackNavigation = () => {
  return (
    <NewDeckStackNavigator.Navigator>
      <NewDeckStackNavigator.Screen
        name="NewDeck"
        component={NewDeck} 
        options={
          { 
            title: 'New Deck',
            headerStyle: { backgroundColor: '#6a0dad' },
            headerTitleStyle: { color: 'white' }
          }
        }
      />
    </NewDeckStackNavigator.Navigator>
  );
}

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
            component={HomeStackNavigation}
            options={ { title: "Home", tabBarIcon: HomeIconRender } }
          />
          <HomeTabNavigator.Screen 
            name="NewDecK"
            component={NewDeckStackNavigation}
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
