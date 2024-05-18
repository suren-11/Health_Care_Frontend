import React  from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from '../screen/Patient/LoginScreen'
import SplashScreen from '../screen/Patient/SplashScreen';
import HomeScreen from '../screen/Patient/HomeScreen';
import ProfileScreen from '../screen/Patient/ProfileScreen';
import CalculatorScreen from '../screen/Patient/CalculatorScreen';
import DoctorsScreen from '../screen/Patient/DoctorsScreen';
import DoctorsDetailsScreen from '../screen/Patient/DoctorsDetailsScreen';
import BookingScreen from '../screen/Patient/BookingScreen';
import AHomeScreen from '../screen/Admin/HomeScreen';
import DHomeScreen from '../screen/Doctor/HomeScreen'
import SignUpScreen from '../screen/Patient/SignUpScreen';
import AppointmentScreen from '../screen/Patient/AppointmentScreen';
import AppointmentDetails from '../screen/Patient/AppointmentDetails';
import DoctorAppointmentScreen from '../screen/Doctor/DoctorAppointmentScreen';
import DoctorAppointmentDetails from '../screen/Doctor/DoctorAppointmentDetails';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DashBoard() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'BMI') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Use the RotatingIcon component
          return  <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#179DFF',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,
          shadowOffset: { width: 0, height: -1 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 5,
          position:'absolute',
          right:16,
          bottom:5,
          left:16,
          height:45,
          borderRadius:15
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="BMI" component={CalculatorScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='DoctorAppointmentScreen'>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
        <Stack.Screen name='DashBoard' component={DashBoard} />
        <Stack.Screen name='AppointmentScreen' component={AppointmentScreen} options={{headerShown:true, headerTitleAlign: 'center',title: 'Appointments', headerPressColor: '#3A95C2',headerTintColor:'black'}}/>
        <Stack.Screen name='Doctors' component={DoctorsScreen} options={{headerShown:true, headerTitleAlign: 'center',title: 'Find a Doctor', headerPressColor: '#3A95C2',headerTintColor:'black'}}/>
        <Stack.Screen name='DoctorsDetails' component={DoctorsDetailsScreen} options={{headerShown:true, headerTitleAlign: 'center',title: 'Doctor Details', headerPressColor: '#3A95C2',headerTintColor:'black'}}/>
        <Stack.Screen name='BookingScreen' component={BookingScreen} options={{headerShown:true, headerTitleAlign: 'center',title: 'Booking Details', headerPressColor: '#3A95C2',headerTintColor:'black'}}/>
        <Stack.Screen name='AppointmentDetails' component={AppointmentDetails} options={{headerShown:true, headerTitleAlign: 'center',title: 'Appointment Details', headerPressColor: '#3A95C2',headerTintColor:'black'}}/>
        <Stack.Screen name='AHomeScreen' component={AHomeScreen}/>
        <Stack.Screen name='DHomeScreen' component={DHomeScreen}/>
        <Stack.Screen name='DoctorAppointmentScreen' component={DoctorAppointmentScreen} options={{headerShown:true, headerTitleAlign: 'center',title: 'Appointments', headerPressColor: '#3A95C2',headerTintColor:'black'}}/>
        <Stack.Screen name='DoctorAppointmentDetails' component={DoctorAppointmentDetails} options={{headerShown:true, headerTitleAlign: 'center',title: 'Appointment Details', headerPressColor: '#3A95C2',headerTintColor:'black'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
