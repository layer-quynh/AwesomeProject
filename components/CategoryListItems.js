import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import SkiiImage from '../assets/skiing.png'

export default function CategoryListItems(props) {
    const {category} = props
    return <View style={styles.container}>
        <Text style={styles.title}>{category.name}</Text>
        <Image style={styles.categoryImage} source={SkiiImage} />
    </View>
}

const MARGINBOTTOM = 16;

const styles = StyleSheet.create({
    categoryImage: {
        width: 64,
        height: 64
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.7,
        elevation: 6,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        marginBottom: MARGINBOTTOM
    }
})