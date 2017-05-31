'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class SecondPage extends Component {

  _onPressButtonGET(){
    fetch("https://facebook.github.io/react-native/movies.json", {method: "GET"})
    .then((response) => {
      console.log(response);
      return response;
    })
    .then((response) => response.json())
    .then((responseJson) => {
    console.log("GET RESPONSE = " + JSON.stringify(responseJson));
    })
    .catch((error) => {
    console.error(error);
    });
  }

  _onPressButtonPOST(){
    fetch("https://facebook.github.io/react-native/movies.json", {method: "POST"})
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
    console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
                <Button onPress={this._onPressButtonGET}
                        title='GET BUTTON'/>
                <Button onPress={this._onPressButtonPOST}
                        title='POST BUTTON'/>
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
