import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-paper';


const DoctorCard = ({ item , navigation }) => {
    return (
        <TouchableOpacity onPress={()=> {navigation.navigate('DoctorsDetails',{doctor : item})}}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Avatar.Image
                        size={75}
                        source={item.icon} // Replace with your image URI
                        style={styles.avatar}
                    />
                    <View style={styles.textGroup}>
                        <Text style={styles.header}>{item.name}</Text>
                        <Text style={styles.paragraph}>{item.specialty}</Text>
                        <Text style={styles.paragraph}>{item.university}</Text>
                        <Text style={styles.paragraph}>{item.experience} years of experience</Text>
                    </View>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        overflow: 'hidden',
        marginBottom: 10,
        // elevation:50,
        shadowColor:'white'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 10,
    },
    textGroup: {
        flexDirection: 'column',
        // backgroundColor:'gray',
        maxWidth: 200
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraph: {
        fontSize: 13,
        fontStyle: 'italic',
        opacity: 0.5
    },
});


export default DoctorCard