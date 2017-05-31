import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Button,
} from 'react-native';
import MyPresentationalComponent from './MyPresentationalComponent'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
  },
});


export default class Common1 extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows([
          'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
        ])
      };
    }
    render() {
      return (
        <View>
            <MyPresentationalComponent dataSource = {this.state.dataSource} />
        </View>
      );
    }
}
