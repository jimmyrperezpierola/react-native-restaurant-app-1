import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import RestaurantItem from './RestaurantItem';

interface State {}

interface Restaurant {
  id: number;
  name: string;
}

interface Props {
  id?: number;
  name?: string;
}

interface Props {
  restaurants: Restaurant[];
}

export default class RestaurantList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { restaurants } = this.props;
    return (
      <View>
        <ScrollView style={styles.container}>
          {restaurants.map(restaurant => {
            return (
              <RestaurantItem key={restaurant.id} name={restaurant.name} />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8
  }
});
