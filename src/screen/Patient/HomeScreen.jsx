import React from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, StatusBar, Image } from 'react-native';
import MenuItem from '../../components/MenuItem';
import menuItems from '../../data/data';
import Logo from '../../images/logo.png'


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={'#179DFF'} />
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#179DFF', paddingVertical: 30,}}>
          <View style={{}}>
            <Image source={Logo} style={styles.logo} resizeMode='contain' />
          </View>
          <View>
            <Text style={styles.title}>Welcome</Text>
          </View>
        </View>
        <View style={styles.menuGrid}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} icon={item.icon} label={item.label} navigation = {navigation} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F6F6',
  },
  logo: {
    height: 90,
    width: 90,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 20,
    color: '#ffff',
  },
  menuGrid: {
    flex: 0.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
    backgroundColor: '#F5F6F6', //'#f5f8fa'
    top: -20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default HomeScreen;
