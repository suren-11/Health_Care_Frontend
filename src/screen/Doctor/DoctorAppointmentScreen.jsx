import React, { useState, useMemo } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, Pressable } from 'react-native';
import { Menu, IconButton, Provider as PaperProvider } from 'react-native-paper';
import appointment from '../../data/appointment'; // your data source
import AppointmentCard from '../../components/AppointmentCard'; // your card component
import DoctorAppointmentCard from '../../components/DoctorAppointmentCard';
import DoctorSearchBar from '../../components/DoctorSearchBar';
const COLORS = { white: '#FFF' }; // Define your color scheme

const DoctorAppointmentScreen = ({ navigation }) => {
    const [statusFilter, setStatusFilter] = useState('pending');
    const [searchQuery, setSearchQuery] = useState("");

    // Memoized filtered data based on the status
    const filteredAppointments = useMemo(() => {
        return appointment
        .filter(item => item.status === statusFilter)
        .filter(
            (item) =>
            item.patientName.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [statusFilter,searchQuery]);

    // Function to handle status filter change
    const handleStatusChange = (newStatus) => {
        setStatusFilter(newStatus);
    };

    return (
        <PaperProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{ flex: 0.1, paddingLeft: 16, paddingRight: 16, paddingTop: 10, marginBottom:20}}
                >
                    <DoctorSearchBar
                        searchQuery={searchQuery}
                        onSearchQueryChange={setSearchQuery}
                        style={styles.searchInput}
                        
                    />
                </View>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-around' }}>
                    <Pressable
                        style={[
                            styles.button,
                            { backgroundColor: statusFilter === 'pending' ? "#CDCDCD" : "#1C93F3" },
                        ]}
                        onPress={() => handleStatusChange('pending')}
                    >
                        <Text style={styles.buttonText}>Pending</Text>
                    </Pressable>
                    <Pressable
                        style={[
                            styles.button,
                            { backgroundColor: statusFilter === 'accepted' ? "#CDCDCD" : "#1C93F3" },
                        ]}
                        onPress={() => handleStatusChange('accepted')}
                    >
                        <Text style={styles.buttonText}>Accepted</Text>
                    </Pressable>
                    <Pressable
                        style={[
                            styles.button,
                            { backgroundColor: statusFilter === 'rejected' ? "#CDCDCD" : "#1C93F3" },
                        ]}
                        onPress={() => handleStatusChange('rejected')}
                    >
                        <Text style={styles.buttonText}>Reject</Text>
                    </Pressable>
                </View>
                <View style={{ flex: 1, padding: 10 }}>
                    <FlatList
                        data={filteredAppointments}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => {
                            if (statusFilter === 'pending') {
                                return <DoctorAppointmentCard item={item} navigation={navigation} status={statusFilter} />;
                            } else if (statusFilter === 'accepted') {
                                return <DoctorAppointmentCard item={item} navigation={navigation} status={statusFilter} />;
                            }
                            // You can add more conditions if needed for other statuses
                        }}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </SafeAreaView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 25,
        width: 90,
        borderRadius: 10
        // marginLeft:10

    },
    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: "#1C93F3",
        backgroundColor: "white",
      },
})

export default DoctorAppointmentScreen