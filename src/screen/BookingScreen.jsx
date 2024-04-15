import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
import { RadioButton, Avatar } from "react-native-paper";
import appointment from "../data/appointment";

const BookingScreen = ({ route }) => {
  const { doctor } = route.params;

  const [checked, setChecked] = useState("first");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios"); // For iOS, we need to handle the modal visibility differently
    setDate(currentDate);
  };

  const isSlotDisabled = (day, slot) => {
    return appointment.some(
      (appt) =>
        appt.name === doctor.name &&
        appt.timeSlots[day] &&
        appt.timeSlots[day].includes(slot)
    );
  };


  const handleSlotSelection = (day, slot) => {
      setSelectedAppointment({
        img: doctor.icon,
        doctor: doctor.name,
        day: day,
        slot: slot,
      });
      setIsModalVisible(true);
  };


  const handleConfirm = () => {
    // Add your confirmation logic here
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setSelectedAppointment(null);
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <Text style={styles.detailsTitle}>Select an appointment type</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                margin: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ marginLeft: 10 }}>Video Visit</Text>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                color="#1C93F3"
                onPress={() => setChecked("first")}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                margin: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ marginLeft: 10 }}>Phone Call</Text>
              <RadioButton
                value="second"
                color="#1C93F3"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
              />
            </View>
          </View>
        </View>
        <View style={{ margin: 20 }}>
          <Text style={styles.detailsTitle}>
            Pick a timeslot {doctor.name}{" "}
          </Text>
          <View
            style={{
              borderRadius: 15,
              backgroundColor: "white",
              elevation: 15,
              marginVertical: 10,
            }}
          >
            {Object.entries(doctor.timeSlots).map(([day, slots]) => (
              <View
                key={day}
                style={{ margin: 5, borderRadius: 10, marginVertical: 10 }}
              >
                <Text style={{ padding: 5, fontSize: 22, fontWeight: "bold" }}>
                  {day}
                </Text>
                <View
                  style={{
                    flexWrap: "wrap",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  {slots.map((slot, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        backgroundColor: isSlotDisabled(day, slot)
                          ? "#CDCDCD"
                          : "#1C93F3",
                        padding: 10,
                        marginTop: 5,
                        borderRadius: 20,
                      }}
                      disabled={isSlotDisabled(day, slot)}
                      onPress={() => handleSlotSelection(day, slot)}
                    >
                      <Text style={{ color: "white", fontWeight: "bold" }}>
                        {slot}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        statusBarTranslucent={true}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
        // animationInTiming={5000}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{ margin: 10, padding: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <Avatar.Image
                  source={doctor.icon} // Replace with your image path
                  size={40}
                  style={styles.avatar}
                />
                <Text style={styles.detailsTitle}>
                  {selectedAppointment?.doctor}
                </Text>
              </View>
              <Text style={styles.modalText}>
                Type: {checked === "first" ? "Video Visit" : "Phone Call"}
              </Text>
              <Text style={styles.modalText}>
                Day: {selectedAppointment?.day}
              </Text>
              <Text style={styles.modalText}>
                Time Slot: {selectedAppointment?.slot}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: "#CDCDCD", borderBottomLeftRadius: 10 },
                ]}
                onPress={() => {
                  handleCancel();
                }}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: "#1C93F3", borderBottomRightRadius: 10 },
                ]}
                onPress={() => {
                  handleConfirm();
                }}
              >
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailsTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 5,
    color: "#1C93F3",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    // padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    // marginBottom: 10,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: "yellow",
  },
  button: {
    flex: 0.5,
    padding: 15,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  avatar: {
    marginRight: 10,
  },
});

export default BookingScreen;
