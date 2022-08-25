import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import RestaurantDetail from './RestaurantDetail';

const RestaurantList = ({ title, restaurants, navigation }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants}
                keyExtractor={(restaurant) => restaurant.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurantShow')}>
                            <RestaurantDetail restaurant={item}/>
                        </TouchableOpacity>                        
                    )
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

export default withNavigation(RestaurantList);