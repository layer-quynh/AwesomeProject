import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import CategoryListItems from "../components/CategoryListItems";

export default class Categories extends React.PureComponent {
  static navigationOptions = {
    title: 'Home'
  };

  constructor(props) {
    super(props);

    this.state = {
      categories: [
        { id: 1, name: "Dung cu truot tuyet" },
        { id: 2, name: "Quan ao truot tuyet" },
        { id: 3, name: "Kinh mu" }
      ]
    };
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={({ item }) => 
            <CategoryListItems 
                category={item}
                onPress={() => {
                    navigation.navigate('Category', {
                        categoryName: item.name
                    });
                }} />}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={styles.container}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  }
});
