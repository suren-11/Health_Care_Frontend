import React, { useState, useMemo } from "react";
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Chip } from "react-native-paper";
import doctorsData from "../../data/DoctorsData";
import DoctorCard from "../../components/DoctorCard";
import DoctorSearchBar from "../../components/DoctorSearchBar";
import Icon from "react-native-vector-icons/Ionicons";

const DoctorsScreen = ({ navigation }) => {
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBarClicked, setSearchBarClicked] = useState(false); // New state

  const toggleSearchBar = () => {
    console.log("clicked the search bar")
    setSearchBarClicked(!searchBarClicked);
  };

  const handlePressChip = (category, value) => {
    if (category === "specialty") {
      setSelectedSpecialties((prevSelected) => {
        if (prevSelected.includes(value)) {
          // If already selected, remove it from the array
          return prevSelected.filter((item) => item !== value);
        } else {
          // If not selected, add it to the array
          return [...prevSelected, value];
        }
      });
    } else if (category === "day") {
      setSelectedDays((prevSelected) => {
        if (prevSelected.includes(value)) {
          // If already selected, remove it from the array
          return prevSelected.filter((item) => item !== value);
        } else {
          // If not selected, add it to the array
          return [...prevSelected, value];
        }
      });
    }
  };

  const filteredDoctorsData = useMemo(() => {
    return doctorsData
      .filter(
        (doctor) =>
          (selectedSpecialties.length === 0 ||
            selectedSpecialties.includes(doctor.specialty)) &&
          (selectedDays.length === 0 ||
            doctor.availableDays.some((day) => selectedDays.includes(day)))
      )
      .filter((doctor) =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [selectedSpecialties, selectedDays, searchQuery]);

  const specialties = [
    "Primary Care",
    "Cardiology",
    "Pediatrics",
    "Dermatology",
    "Psychiatry",
    "Urology",
    "Oncology",
    "Neurology",
    "Endocrinology",
    "Gastroenterology",
  ];
  const availableDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const renderItem = ({ item }) => (
    <DoctorCard item={item} navigation={navigation} />
  );
  const renderHeader = () => (
    <>
      <Text style={styles.title}>Specialty</Text>
      <View style={styles.chipContainer}>
        {specialties.map((specialty, index) => (
          <Chip
            key={index}
            style={[
              styles.chip,
              selectedSpecialties.includes(specialty) && styles.selectedChip,
            ]}
            mode="flat"
            selected={selectedSpecialties.includes(specialty)}
            onPress={() => handlePressChip("specialty", specialty)}
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
              selectedDays.includes(day) && styles.selectedChip,
            ]}
            selected={selectedDays.includes(day)}
            onPress={() => handlePressChip("day", day)}
          >
            {day}
          </Chip>
        ))}
      </View>
      <Text style={styles.title}>Results</Text>
    </>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      {/* <View style={{ backgroundColor: 'white', padding: 15, flexDirection: 'row' }}>
        <Icon name="chevron-back-circle" size={33} color="lightblue" onPress={navigation.goBack} />
        <View style={{flex:1}}>
          <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: 'bold', color:'#1C93F3'}}>Find a Doctor</Text>
        </View>
      </View> */}
      <View
        style={{ flex: 0.1, paddingLeft: 16, paddingRight: 16, paddingTop: 10 }}
      >
        <DoctorSearchBar
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          style={styles.searchInput}
          onClick={() => { toggleSearchBar() }}
        />
      </View>
      <View style={[styles.container, { flex: 0.9 }]}>
        <View>
          <FlatList
            data={filteredDoctorsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{}}
            ListHeaderComponent={searchBarClicked ? renderHeader : null}
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
    fontWeight: "bold",
    marginBottom: 8,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 16,
  },
  chip: {
    marginRight: 5,
    marginBottom: 8,
    backgroundColor: "lightblue", // Example color
    borderRadius: 20, // Example border radius
  },
  selectedChip: {
    backgroundColor: "deepskyblue",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#1C93F3",
    backgroundColor: "white",
  },
});

export default DoctorsScreen;
