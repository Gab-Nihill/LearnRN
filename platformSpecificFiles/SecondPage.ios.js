import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class SecondPage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Cette vue est spécifique à la plateforme IOS
        </Text>
        <Text style={styles.instructions}>
          Grâce aux sub-extension .ios & .android React Native permet de différencier un composant selon la plateforme (ex : index.ios.js) {"\n"}
          Il est aussi possible de modifier certains morceaux d'un composant via le module React Native Platform
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
