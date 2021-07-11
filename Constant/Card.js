import React from 'react';
import { View,  StyleSheet, Button } from 'react-native';

const Card = props => {
    return (
    
    <View style={{ ...styles.card, ...props.style }}>{props.children}
    
    </View>
    
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor:'black',
        padding: 20,
        marginVertical: 10,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'yellow',
        elevation: 10,
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center'

    }
});

export default Card;