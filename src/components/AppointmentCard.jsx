import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import doctor from '../data/DoctorsData';
import Icon from "react-native-vector-icons/Ionicons";

const AppointmentCard = ({ item, navigation }) => {
    let icon
    doctor.map((doc) => {
        if (item.name === doc.name) {
            icon = doc.icon;
        }
    });
    // Determine the icon for the appointment type
    const typeIcon = item.type === 'video' ? 'videocam' : 'call';
    const size = item.type === 'video' ? 20 : 15;

    return (
        <TouchableOpacity onPress={() => { navigation.navigate('DoctorsDetails', { doctor: item }) }}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <View style={{}}>
                        <Avatar.Image
                            size={75}
                            source={icon} // Replace with your image URI
                            style={styles.avatar}
                        />
                    </View>

                    <View style={styles.textGroup}>
                        <View><Text style={styles.header}>{item.name}</Text></View>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={styles.paragraph} >
                                <Icon name={typeIcon} size={size} color="#1C93F3" />
                            </View>
                            <View style={styles.paragraph}>
                                <Icon name="calendar" size={15} color="#1C93F3" />
                            </View>
                            <View style={styles.paragraph}>
                                <Icon name="time" size={20} color="#1C93F3" />
                            </View>
                        </View>

                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Text style={[styles.status, { backgroundColor: item.status === 'accepted' ? 'green' : 'orange' }]} >
                            {item.status}
                        </Text>
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
        shadowColor: 'white'
    },
    content: {
        flexDirection: 'row',
        // alignItems: 'left',
        justifyContent: 'space-evenly'
    },
    avatar: {
        marginRight: 5,
    },
    textGroup: {

        flexDirection: 'column',
        // backgroundColor: 'gray',
        // maxWidth: 200
    },
    header: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
        padding:5
        // backgroundColor: 'gray'
    },
    paragraph: {
        margin: 4
    },
    status: {
        width: 70,
        textAlign: "center",
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 10, height: 22

    }
});


export default AppointmentCard