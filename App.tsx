import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Button,
  Alert,
  StatusBar,
  ScrollView
} from 'react-native';
import Headers from './src/component/Header';
import Restaurants from './src/component/RestaurantItem';
import RestaurantLists from './src/component/RestaurantList';
import axios from 'axios';

interface State {
  isLoading: boolean;
  restaurants: any[];
}

const URL_API = 'https://developers.zomato.com/api/v2.1';
const URL_KEY = '33c243cf7ea66d3980586350a3d50b62';

export default class App extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
      restaurants: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(`${URL_API}/search`, {
        headers: {
          'user-key': `${URL_KEY}`
        }
      })
      .then(response => {
        console.log(response.data.restaurant);
        const restaurants = response.data.restaurants.map((item: any) => {
          const restaurant = item.restaurant;
          console.log(restaurant);

          return {
            id: restaurant.id,
            name: restaurant.name,
            address: restaurant.location.address
          };
        });

        this.setState({
          restaurants,
          isLoading: false
        });
        // data.
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Headers />
        {this.state.isLoading && <ActivityIndicator size="large" />}

        <RestaurantLists restaurants={this.state.restaurants} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  }
});
