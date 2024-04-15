import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView ,Pressable} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const DoctorsDetailsScreen = ({ route, navigation }) => {
    const { doctor } = route.params;

    return (
        <SafeAreaView style={styles.card}>
            <ScrollView>
                <View style={{ margin: 16, backgroundColor: 'white' }}>
                    <View style={styles.profileContainer}>
                        <Avatar.Image
                            source={doctor.icon} // Replace with your image path
                            size={120}
                            style={styles.avatar}
                        />
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>{doctor.name}</Text>
                            <Text style={styles.subtitle}>{doctor.specialty}</Text>
                            <Text style={styles.university}>{doctor.university}</Text>
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsTitle}>About Me</Text>
                        <Text style={styles.details}>{doctor.aboutMe}{'\n'}</Text>
                        <Text style={styles.detailsTitle}>My Approach</Text>
                        <Text style={styles.details}>{doctor.myApproach}</Text>
                    </View>
                    <Pressable
                        style={({ pressed }) => [{ backgroundColor: pressed ? '#e0f4f1' : '#1C93F3' },
                        styles.button]} 
                        onPress={()=> navigation.navigate('BookingScreen', {doctor : doctor})}
                    >
                        <Text style={styles.buttonText}>Book Now</Text>
                    </Pressable>

                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        // elevation: 4,
        // borderRadius: 8,
        // padding: 10,
        backgroundColor: '#ffffff',
        flex: 1,

    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'center',
        marginBottom: 10,
        marginTop: 20,
        // backgroundColor:'yellow'
    },
    avatar: {
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
        // backgroundColor:'red'

    },
    title: {
        fontWeight: 'bold',
        fontSize: 27
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
    university: {
        fontSize: 12,
        color: '#666',
    },
    detailsContainer: {
        marginTop: 10,
        // backgroundColor:'gray'
    },
    detailsTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#1C93F3'
    },
    details: {
        fontSize: 14,
        color: 'black',
        opacity:0.6 ,
        marginTop: 5,
        textAlign: 'justify'
    },
    button: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 15,
        elevation: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
});


export default DoctorsDetailsScreen