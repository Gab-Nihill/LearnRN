/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


 import React, { AppRegistry } from 'react-native';
 import { StackNavigator } from 'react-navigation';
 import HomePage from './HomeComponent';
 import SecondPage from './SecondPage';

 const ExampleListView = StackNavigator({
    Home : { screen: HomePage },
    SecondPage : {screen : SecondPage},
 });


 AppRegistry.registerComponent('ExampleListView', () => ExampleListView);
