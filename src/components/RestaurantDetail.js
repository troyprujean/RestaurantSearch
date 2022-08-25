import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RestaurantDetail = ({ restaurant }) => {
    return (
        <View style={styles.containerStyles}>
            { 
                restaurant.image_url !== '' 
                ? <Image source={{ uri: restaurant.image_url }} style={styles.imageStyles} /> 
                : <View style={[styles.imageStyles, {justifyContent: 'center'}]}><Text style={{textAlign: 'center'}}>No Image</Text></View>
            }
            <Text style={styles.nameStyle} >{restaurant.name}</Text>
            <Text>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyles: {
        marginLeft: 15
    },
    imageStyles: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold'
    }
});

export default RestaurantDetail;