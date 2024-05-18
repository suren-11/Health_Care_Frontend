import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import doctor from '../data/DoctorsData';
import Icon from "react-native-vector-icons/Ionicons";
import Calender from "react-native-vector-icons/MaterialCommunityIcons";
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
        <TouchableOpacity onPress={() => { navigation.navigate('AppointmentDetails', { doctor: doctor  , appointments: item }) }}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <View style={{ marginLeft: 6 }}>
                    {icon ? (
                            <Avatar.Image
                                size={75}
                                source={icon} // Use the icon as the source
                                style={styles.avatar}
                            />
                        ) : (
                            <Avatar.Text size={75} label={item.name} /> // Use item.name as the label
                        )}
                    </View>
                    <View style={{ marginLeft: 10, }}>
                        <View style={styles.textGroup}>
                            <View>
                                <Text style={styles.header}>{item.name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={styles.paragraph} >
                                    <Icon name={typeIcon} size={size} color="#8FD0FF" />
                                </View>
                                <View style={styles.paragraph}>
                                    {/* <Icon name="calendar" size={15} color="#8FD0FF" /> */}
                                    <Calender name="calendar-clock" size={20} color="#8FD0FF" />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20, paddingLeft: 5 }}>
                            <Text style={{
                                color:
                                    item.status === 'accepted' ?
                                        'green' : item.status === 'rejected' ?
                                            'red' : 'orange'
                            }}>{item.status}</Text>
                        </View>
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
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'left',
        // backgroundColor:'gray'
        // justifyContent: 'space-between'
    },
    avatar: {
        // marginRight: 5,
    },
    textGroup: {

        flexDirection: 'column',
        marginLeft: 20,
        // backgroundColor: 'gray',
        // maxWidth: 200
    },
    header: {
        // textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        // backgroundColor: 'gray'
    },
    paragraph: {
        // margin: 4
        marginLeft: 5
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