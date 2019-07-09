import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ProductListItems from "../components/ProductListItems";

export default class Category extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
      return {
          title: navigation.getParam('categoryName')
      };
  };

  constructor(props) {
      super(props);

      this.state = {
          products: [
              {
                  id: 1,
                  images: [
                      {
                          url: 'http://chinasouthernairline.vn/wp-content/uploads/2018/03/giay-truot-tuyet.png'
                      }
                  ],
                  name: 'snow board 1',
                  price: '500000'
              },
              {
                id: 2,
                images: [
                    {
                        url: 'http://chinasouthernairline.vn/wp-content/uploads/2018/03/giay-truot-tuyet.png'
                    }
                ],
                name: 'snow board 2',
                price: '200000'
            }
          ]
      }
  }

  render() {
    return (
      <FlatList
        data={this.state.products}  
        numColumns={2}
        contentContainerStyle={styles.container}
        renderItem={({item}) => 
            <View style={styles.wrapper}>
                <ProductListItems product={item} />
            </View>}
        keyExtractor={(item) => `${item.id}`} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  wrapper: {
      flex: 1,
      paddingHorizontal: 8,
  }
});
