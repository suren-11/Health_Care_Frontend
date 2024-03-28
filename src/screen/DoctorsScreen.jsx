import React, { useState, useMemo } from 'react';
import { FlatList, View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Chip, Searchbar } from 'react-native-paper';
import doctorsData from '../data/DoctorsData'
import DoctorCard from '../components/DoctorCard';
import DoctorSearchBar from '../components/DoctorSearchBar';

const DoctorsScreen = ({navigation}) => {

  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  const handlePressChip = (category, value) => {
    if (category === 'specialty') {
      setSelectedSpecialties(prevSelected => {
        if (prevSelected.includes(value)) {
          // If already selected, remove it from the array
          return prevSelected.filter(item => item !== value);
        } else {
          // If not selected, add it to the array
          return [...prevSelected, value];
        }
      });
    } else if (category === 'day') {
      setSelectedDays(prevSelected => {
        if (prevSelected.includes(value)) {
          // If already selected, remove it from the array
          return prevSelected.filter(item => item !== value);
        } else {
          // If not selected, add it to the array
          return [...prevSelected, value];
        }
      });
    }
  };


  const filteredDoctorsData = useMemo(() => {
    return doctorsData
      .filter(doctor =>
        (selectedSpecialties.length === 0 || selectedSpecialties.includes(doctor.specialty)) &&
        (selectedDays.length === 0 || doctor.availableDays.some(day => selectedDays.includes(day)))
      )
      .filter(doctor =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [selectedSpecialties, selectedDays, searchQuery]);

  const specialties = [
    'Primary Care',
    'Cardiology',
    'Pediatrics',
    'Dermatology',
    'Psychiatry',
    'Urology',
    'Oncology',
    'Neurology',
    'Endocrinology',
    'Gastroenterology',
  ];
  const availableDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const renderItem = ({ item }) => <DoctorCard item={item} navigation={navigation} />;
  const renderHeader = () => (
    <>

      <Text style={styles.title}>Specialty</Text>
      <View style={styles.chipContainer}>
        {specialties.map((specialty, index) => (
          <Chip
            key={index}
            style={[
              styles.chip,
              selectedSpecialties.includes(specialty) && styles.selectedChip
            ]}
            mode="flat"
            selected={selectedSpecialties.includes(specialty)}
            onPress={() => handlePressChip('specialty', specialty)}
          >
            {specialty}
          </Chip>
        ))}
      </View>
      <Text style={styles.title}>Available Days</Text>
      <View style={styles.chipContainer}>
        {availableDays.map((day) => (
          <Chip
            key={day}
            style={[
              styles.chip,
              selectedDays.includes(day) && styles.selectedChip
            ]}
            selected={selectedDays.includes(day)}
            onPress={() => handlePressChip('day', day)}
          >
            {day}
          </Chip>
        ))}
      </View>
      <Text style={styles.title}>Results</Text>
    </>

  );

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <View style={{flex:0.1 , paddingLeft:16, paddingRight:16,paddingTop:10}}>
        <DoctorSearchBar searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} style={styles.searchInput} />
      </View>
      <View style={[styles.container, {flex :0.9}]}>
        <View>
          <FlatList
            data={filteredDoctorsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{}}
            ListHeaderComponent={renderHeader}
          // Style and other props for FlatList
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  chipContainer: {

    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 16,

  },
  chip: {
    marginRight: 5,
    marginBottom: 8,
    // Add additional styles to match the provided image
    backgroundColor: 'lightblue', // Example color
    borderRadius: 20, // Example border radius
  },
  selectedChip: {
    backgroundColor: 'deepskyblue', // Or another color to indicate selection
  },
  searchInput: {
    // marginVertical: 10,
    borderWidth: 1,
    borderColor: 'lightblue',
    backgroundColor: 'white'

    // borderRadius: 6,
  },
});

export default DoctorsScreen;
