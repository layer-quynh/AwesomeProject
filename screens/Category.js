import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Category extends React.PureComponent {
  static navigationOptions = {
    title: "Category"
  };

  render() {
    return (
      <View>
        <Text>Category</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 8,
    paddingRight: 8
  }
});
