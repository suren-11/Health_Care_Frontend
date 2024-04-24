import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TextInput, StyleSheet, Pressable, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import backgroundImage from '../../images/bgImage.png';
import Logo from '../../images/logo.png';

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigation = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.navigate('AHomeScreen');
    } else if (username === 'doctor' && password === 'doctor') {
      navigation.navigate('DHomeScreen');
    } else if (username === 'client' && password === 'client') {
      navigation.navigate('DashBoard');
    } else {
      // Handle invalid username/password
      alert('Invalid username or password');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={'#1C93F3'} />
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flex: 0.5, }}>
            <ImageBackground source={backgroundImage} resizeMethod='resize' resizeMode='stretch'>
              <View style={styles.logoContainer}>
                <Image source={Logo} style={styles.logo} resizeMode='contain' />
                <Text style={styles.loginTitle}>Login</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>User Name</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="Enter your password"
                secureTextEntry={true}
                maxLength={20}
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <Pressable
              style={({ pressed }) => [{ backgroundColor: pressed ? '#e0f4f1' : '#1C93F3' },
              styles.button]}
              onPress={handleNavigation}
            >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account yet?</Text>
              <Pressable>
                <Text style={styles.signupLink}>Sign up now!</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 30,
    paddingVertical: 30,
  },
  logo: {
    height: 150,
    width: 150,
  },
  loginTitle: {
    color: 'white',
    fontSize: 35,
    fontWeight: '500',
  },
  formContainer: {
    flex: 0.5,
    marginHorizontal: 30,
    marginVertical: 20,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  inputLabel: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '400',
  },
  inputBox: {
    marginTop: 10,
    borderRadius: 15,
    borderBottomWidth: 2,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#1C93F3',
    paddingLeft: 10,
    padding: 7,
    backgroundColor: '#f5f5f5',
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
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  signupText: {
    fontSize: 15,
  },
  signupLink: {
    color: '#1C93F3',
    fontSize: 15,
  },
});
