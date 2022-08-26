import React , { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const RestaurantShowScreen = ({ navigation }) => {
    const [restaurant, setRestaurant] = useState(null);
    const restaurantId = navigation.getParam('restaurantId');

    const getRestaurant = async id => {
        const response = await yelp.get(`/${id}`);
        setRestaurant(response.data);
    };

    useEffect(() => {
        getRestaurant(restaurantId);
    }, []);

    if (!restaurant) {
        return null;
    }

    return (
        <View>
            <Text>{restaurant.name}</Text>
            <FlatList 
                data={restaurant.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyles} source={{ uri: item }} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyles: {
        height: 200,
        width: 300
    }
});

export default RestaurantShowScreen;