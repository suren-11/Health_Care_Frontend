import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, SafeAreaView } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import doctor from '../data/DoctorsData';
import Icon from "react-native-vector-icons/Ionicons";


const DoctorAppointmentCard = ({ item, navigation, status }) => {

    const [togleState, setTogleState] = useState(false);

    let icon
    doctor.map((doc) => {
        if (item.name === doc.name) {
            icon = doc.icon;
        }
    });
    // Determine the icon for the appointment type
    const typeIcon = item.type === 'video' ? 'videocam' : 'call';
    const size = item.type === 'video' ? 20 : 15;
    // Extract the first letter of the patient's name
    const firstLetter = item.patientName.charAt(0);

    return (



        <SafeAreaView>
            {status === 'accepted' ? (<TouchableOpacity onPress={() => { navigation.navigate('DoctorAppointmentDetails', { doctor: doctor, appointments: item }) }}>
                <Card style={styles.card}>
                    <Card.Content style={styles.content}>
                        <View style={{ marginLeft: 6 }}>
                            {/* {icon ? (
                        <Avatar.Image
                            size={75}
                            source={icon} // Use the icon as the source
                            style={styles.avatar}
                        />
                    ) : (
                        <Avatar.Text size={75} label={item.name} /> // Use item.name as the label
                    )} */}
                            <Avatar.Text size={75} label={firstLetter} />

                        </View>
                        <View style={{ marginLeft: 10, }}>
                            <View style={styles.textGroup}>
                                <View>
                                    <Text style={styles.header}>{item.patientName}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={styles.paragraph} >
                                        <Icon name={typeIcon} size={size} color="#8FD0FF" />
                                    </View>
                                    <View style={styles.paragraph}>
                                        {Object.entries(item.timeSlots).map(([day, slots]) => (
                                            <View key={day} style={{ flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ marginLeft: 10 }}>{day}</Text>
                                                </View>
                                                <View>
                                                    {slots.map((slot, index) => (
                                                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <Text style={{ marginLeft: 4 }}>| {slot}</Text>
                                                        </View>
                                                    ))}
                                                </View>
                                            </View>
                                        ))}

                                    </View>

                                </View>
                                <View style={{  paddingLeft: 5 }}>
                                    <Text style={{ color:'green'}}>{item.status}</Text>
                                </View>
                            </View>

                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
            ) : (<View>
                <Card style={styles.card}>
                    <Card.Content style={styles.content}>
                        <View style={{ marginLeft: 6 }}>
                            {/* {icon ? (
                            <Avatar.Image
                                size={75}
                                source={icon} // Use the icon as the source
                                style={styles.avatar}
                            />
                        ) : (
                            <Avatar.Text size={75} label={item.name} /> // Use item.name as the label
                        )} */}
                            <Avatar.Text size={75} label={firstLetter} />

                        </View>
                        <View style={{ marginLeft: 10, }}>
                            <View style={styles.textGroup}>
                                <View>
                                    <Text style={styles.header}>{item.patientName}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={styles.paragraph} >
                                        <Icon name={typeIcon} size={size} color="#8FD0FF" />
                                    </View>
                                    <View style={styles.paragraph}>
                                        {Object.entries(item.timeSlots).map(([day, slots]) => (
                                            <View key={day} style={{ flexDirection: 'row' }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ marginLeft: 10 }}>{day}</Text>
                                                </View>
                                                <View>
                                                    {slots.map((slot, index) => (
                                                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <Text style={{ marginLeft: 4 }}>| {slot}</Text>
                                                        </View>
                                                    ))}
                                                </View>
                                            </View>
                                        ))}

                                    </View>
                                </View>
                            </View>
                            <View style={{ marginLeft: 20, padding: 5, flexDirection: 'row', }}>
                                <View>
                                    <Pressable style={[
                                        styles.button,
                                        { backgroundColor: "#b0deff", borderRadius: 10 },
                                    ]}>
                                        <Text style={styles.buttonText}>Reject</Text>
                                    </Pressable>
                                </View>
                                <View>
                                    <Pressable style={[
                                        styles.button,
                                        { backgroundColor: "#1C93F3", borderRadius: 10, marginLeft: 30 },
                                    ]}>
                                        <Text style={styles.buttonText}>Accept</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </View >)}<View></View>
        </SafeAreaView >
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

    },
    button: {
        height: 25,
        width: 90,
        // marginLeft:10

    },
    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
    },
});
export default DoctorAppointmentCard