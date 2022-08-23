import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, restaurants, errorMessage] = useRestaurants();

    return (
        <View style={styles.backgroundStyle}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
            <Text>We have found {restaurants.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    errorStyle: {
        backgroundColor: 'red',
        color: 'white'
    }
});

export default SearchScreen;