import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const AppointmentDetails = ({ route, navigation }) => {
  // Extract doctor and appointments props from route.params
  const { doctor, appointments } = route.params;
  let icon, specialty, university
  doctor.map((doc) => {
    if (appointments.name === doc.name) {
      icon = doc.icon;
      specialty = doc.specialty;
      university = doc.university;
    }
  });

  // Now you can use doctor and appointments in your component
  return (
    <SafeAreaView style={styles.card}>
      <ScrollView>
        <View style={{ margin: 16, backgroundColor: 'white' }}>
          <View style={styles.profileContainer}>
            <Avatar.Image
              source={icon} // Replace with your image path
              size={150}
              style={styles.avatar}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{appointments.name}</Text>
              <Text style={styles.subtitle}>{specialty}</Text>
              <Text style={styles.university}>{university}</Text>
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: '#D8EEFD', padding: 16, borderRadius: 10, elivation: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.detail}>Type                   |</Text>
              <Text style={styles.detail}>{appointments.type}</Text>
            </View>

            {Object.entries(appointments.timeSlots).map(([day, slots]) => (
              <View >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.detail}>Date                    |</Text>
                  <Text key={day} style={styles.detail}>{day}</Text>
                </View>
                <View>
                  {slots.map((slot, index) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.detail}>Time                   |</Text>
                      <Text key={index} style={styles.detail}>{slot}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.detail}>Status                 |</Text>
              <Text style={styles.detail}>{appointments.status}</Text>
            </View>
           
          </View>
          <Pressable
            style={({ pressed }) => [{ backgroundColor: pressed ? '#e0f4f1' : '#1C93F3' },
            styles.button]}
          
          >
            <Text style={styles.buttonText}>Prescription</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [{ backgroundColor: pressed ? '#e0f4f1' : '#1C93F3' },
            styles.button]}
          
          >
            <Text style={styles.buttonText}>Report</Text>
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
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent:'center',
    marginBottom: 10,
    marginTop: 10,
    // backgroundColor:'yellow'
  },
  avatar: {
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center'
    // backgroundColor:'red'

  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center'
  },
  university: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center'
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
    opacity: 0.6,
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
  detail:{
    fontSize:15,
    fontWeight:'bold',
    padding:5
  }
});
export default AppointmentDetails