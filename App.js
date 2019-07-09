import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';
import CategoryListItems from './components/CategoryListItems';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {id: 1, name: "Dung cu truot tuyet"},
        {id: 2, name: "Quan ao truot tuyet"},
        {id: 3, name: "Kinh mu"}
      ]
    }
  }

  render() {
    const {categories} = this.state;
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={({item}) => <CategoryListItems category={item} />} 
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
          />
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
