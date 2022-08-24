import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, restaurants, errorMessage] = useRestaurants();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return restaurants.filter(restaurants => {
            return restaurants.price === price;
        });
    };

    return (        
        <View style={styles.containerStyle}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantList title='Cost Effective' restaurants={filterResultsByPrice('$')}/>
                <RestaurantList title='Bit Pricier' restaurants={filterResultsByPrice('$$')}/>
                <RestaurantList title='Big Spender' restaurants={filterResultsByPrice('$$$')}/>
            </ScrollView>            
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    errorStyle: {
        backgroundColor: 'red',
        color: 'white'
    }
});

export default SearchScreen;