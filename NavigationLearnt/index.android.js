/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomePage from './HomeComponent.js';
import SecondPage from './SecondPage.js';

const NavigationLearnt = StackNavigator({
  Home : { screen: HomePage },
  SecondPage : {screen : SecondPage},
});

AppRegistry.registerComponent('NavigationLearnt', () => NavigationLearnt);
