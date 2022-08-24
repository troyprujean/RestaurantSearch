import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantDetail from './RestaurantDetail';

const RestaurantList = ({ title, restaurants }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) => {
                    return <RestaurantDetail restaurant={item}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default RestaurantList;