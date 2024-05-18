import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import backgroundImg from '../../images/backgroundSplash.png';
import Nurse from '../../images/Nurse.png'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SplashScreen({ navigation }) {
  // Refs for animated values
  const fadeIn = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(200)).current;
  const slideLeft = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideUp, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(slideLeft, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      })
    ]).start();
  }, [fadeIn, slideUp, slideLeft]);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImg} style={styles.background} resizeMethod='resize'>
        <Animated.View style={[styles.welcomeContainer, { transform: [{ translateX: slideLeft }] }]}>
          <Animated.Text style={[styles.text, { opacity: fadeIn }]}>
            Welcome{"\n"}to <Text style={styles.healthCare}>Health Care</Text>
          </Animated.Text>
          <Animated.Text style={[styles.subtitle, { opacity: fadeIn }]}>
            Empower Your Parenthood Journey. Where Care Meets Innovation, One Chat at a Time
          </Animated.Text>
        </Animated.View>

        <Animated.View style={[styles.nurseContainer, { transform: [{ translateY: slideUp }] }]}>
          <Image source={Nurse} style={styles.nurseImage} resizeMode='contain' />
        </Animated.View>

        <View style={styles.iconButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('LoginScreen') }}>
            <Icon name="arrow-forward" size={24} color="#179DFF" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  welcomeContainer: {
    flex: 0.4,
    margin: 20,
  },
  text: {
    marginTop: 50,
    fontSize: 40,
    lineHeight: 45,
  },
  healthCare: {
    fontWeight: 'bold',
    color: '#179DFF',
  },
  subtitle: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 13,
    color: '#A9A1A1',
  },
  nurseContainer: {
    flex: 0.6,
    alignItems: 'center',
  },
  nurseImage: {
    top: -30,
    height:400,
    width:250
  },
  iconButtonContainer: {
    margin: 20,
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 40,
  },
});
