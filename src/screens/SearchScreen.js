import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, restaurants, errorMessage] = useRestaurants();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return restaurants.filter(restaurants => {
            return restaurants.price === price;
        });
    };

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantList title='Cost Effective' restaurants={filterResultsByPrice('$')} navigation={navigation} />
                <RestaurantList title='Bit Pricier' restaurants={filterResultsByPrice('$$')} navigation={navigation} />
                <RestaurantList title='Big Spender' restaurants={filterResultsByPrice('$$$')} navigation={navigation} />
            </ScrollView>            
        </>
    );
};

const styles = StyleSheet.create({
    errorStyle: {
        backgroundColor: 'red',
        color: 'white'
    }
});

export default SearchScreen;