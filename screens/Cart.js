import React, { Component } from "react";
import { Text } from 'react-native';

const NumberContext = React.createContext();

export default class Cart extends React.PureComponent {
  static navigationOptions = {
    title: "Cart"
  };

  render() {
      return <Text>Cart</Text>
  }
}
