import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Category from './screens/Category';
import Categories from './screens/Categories';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

const color = {
    ACTIVE: '#147efb',
    INACTIVE: '#ccc'
}

const CategoryStack = createStackNavigator({
    Categories,
    Category
});
CategoryStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => {
        return <Icon name="ios-planet"
        size={36}
        color={focused ? color.ACTIVE : color.INACTIVE} />
    }
};

const CartStack = createStackNavigator({
    Cart
});
CartStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({focused}) => {
        return <Icon name="ios-cart"
        size={36}
        color={focused ? color.ACTIVE : color.INACTIVE} />
    }
};

const OrdersStack = createStackNavigator({
    Orders
});
OrdersStack.navigationOptions = {
    tabBarLabel: "Order",
    tabBarIcon: ({focused}) => {
        return <Icon name="ios-wallet"
        size={36}
        color={focused ? color.ACTIVE : color.INACTIVE} />
    }
};

const SettingsStack = createStackNavigator({
    Settings
});
SettingsStack.navigationOptions = {
    tabBarLabel: "Setting",
    tabBarIcon: ({focused}) => {
        return <Icon name="ios-cog"
        size={36}
        color={focused ? color.ACTIVE : color.INACTIVE} />
    }
};

const AppNavigator = createBottomTabNavigator({
    CategoryStack,
    CartStack,
    OrdersStack,
    SettingsStack
});

export default AppNavigator;