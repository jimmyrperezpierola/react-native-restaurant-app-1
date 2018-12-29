import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  name: string;
}

interface State {
  isFavorite: boolean;
}

export default class Restaurants extends Component<Props, State> {
  state = {
    isFavorite: false
  };

  setFavoriteTrue = () => {
    this.setState({
      isFavorite: !this.state.isFavorite
    });
  };

  render() {
    const { isFavorite } = this.state;
    return (
      <TouchableOpacity onPress={this.setFavoriteTrue}>
        <View
          style={[
            style.container,
            { backgroundColor: isFavorite ? 'green' : 'white' }
          ]}>
          <Text>{this.props.name}</Text>
          {this.state.isFavorite == true && <Text>Favorite</Text>}
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  container: {
    height: 250,
    borderWidth: 1,
    marginTop: 10,
    padding: 7
  },
  wrapper: {
    borderWidth: 1,
    height: 230
  }
});
