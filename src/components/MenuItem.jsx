import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MenuItem = ({ icon, label, onPress }) => {
    return (
        <TouchableOpacity style={styles.menuItem} >
            <Image source={icon} style={styles.icon} resizeMode="cover" />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%', // Approximately width for two items in a row
        margin: '5%',
        backgroundColor: '#FFFFFF', // Assuming white background for menu items
        borderRadius: 10, // Rounded corners for menu items
        elevation: 8, // Shadow for menu items
    },
    icon: {
        width: '100%',
        height:100,
        marginBottom: 8,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    label: {
        fontSize: 17,
        textAlign: 'center',
        color: '#00508B', // Set according to your design
        fontWeight:'bold',
        padding:5
    },
});
export default MenuItem;