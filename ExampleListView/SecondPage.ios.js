'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TabBarIOS,
} from 'react-native';
import Common1 from './common1.js'
import Common2 from './common2.js'

export default class SecondPage extends Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
   selectedTab: 'redTab',
   notifCount: 0,
   presses: 0,
 };
 _renderContent = (color: string, pageText: string, num?: number) => {
   if (num == 1)
   {
     return (
       <Common1/>
     );
   }
   else {
     return (
       <Common2/>
     );
   }

 };

 render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
         title="Blue Tab"
         selected={this.state.selectedTab === 'blueTab'}
         onPress={() => {
           this.setState({
             selectedTab: 'blueTab',
           });
         }}>
         {this._renderContent('#414A8C', 'Blue Tab', 1)}
      </TabBarIOS.Item>
      <TabBarIOS.Item
       title="Red Tab"
       selected={this.state.selectedTab === 'redTab'}
       onPress={() => {
         this.setState({
           selectedTab: 'redTab',
         });
       }}>
       {this._renderContent('#414A8C', 'Blue Tab', 2)}
     </TabBarIOS.Item>
    </TabBarIOS>
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
