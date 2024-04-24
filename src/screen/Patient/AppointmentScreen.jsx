import React, { useState, useMemo } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { Menu, IconButton, Provider as PaperProvider } from 'react-native-paper';
import appointment from '../../data/appointment'; // your data source
import AppointmentCard from '../../components/AppointmentCard'; // your card component

const COLORS = { white: '#FFF' }; // Define your color scheme

const Appointment = ({navigation}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [data, setData] = useState(appointment);
  const [sortOrder, setSortOrder] = useState(null);

  const sortBy = (order) => {
    let sortedData;
    if (order === 'asc') {
      sortedData = [...data].sort((a, b) => (a.status === 'accepted' && b.status !== 'accepted') ? -1 : 1);
    } else if (order === 'desc') {
      sortedData = [...data].sort((a, b) => (a.status === 'accepted' && b.status !== 'accepted') ? 1 : -1);
    }
    setData(sortedData);
    setSortOrder(order);
    setMenuVisible(false);
  };

  const resetSort = () => {
    setData(appointment); // reset to original data
    setSortOrder(null);
    setMenuVisible(false);
  };

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1,}}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 10, height: 50 }}>
          <Text style={{ marginTop: 10 }}>Sort by</Text>
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <IconButton
                icon="sort"
                size={24}
                onPress={() => setMenuVisible(!menuVisible)}
              />
            }
          >
            <Menu.Item onPress={() => sortBy('asc')} title="Sort Ascending" />
            <Menu.Item onPress={() => sortBy('desc')} title="Sort Descending" />
            <Menu.Item onPress={resetSort} title="Reset" />
          </Menu>
        </View>
        <View style={{ flex: 1,  padding: 10,}}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <AppointmentCard item={item} navigation ={navigation}/>}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default Appointment;
