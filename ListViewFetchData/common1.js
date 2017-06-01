import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  FlatList,
  Button,
} from 'react-native';
import MyPresentationalComponent from './MyPresentationalComponent'
import { List, ListItem, SearchBar } from "react-native-elements";


export default class Common1 extends Component {
  constructor(props) {
      super(props);

      this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
}

    componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "86%",
            backgroundColor: "#CED0CE",
            marginLeft: "14%"
          }}
        />
      );
    }

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
      };


    render() {
      return (

        <List  >
          <FlatList
            data={this.state.data}

                      renderItem={({ item }) => (
                      <ListItem
                      roundAvatar
                      title={`${item.name.first} ${item.name.last}`}
                      subtitle={item.email}
                      avatar={{ uri: item.picture.thumbnail }}

                      />
                    )}
            keyExtractor={item => item.email}

              ListHeaderComponent={this.renderHeader}
              />
        </List>
      );
    }
}
