import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import CategoryListItems from './components/CategoryListItems';

export default class App extends React.PureComponent {

  render() {
    console.log("He");
    return (
      <View style={styles.container}>
        <CategoryListItems title="Skiing" />
        <CategoryListItems title="Hello"/>
        <CategoryListItems title="Goodbye" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
});
