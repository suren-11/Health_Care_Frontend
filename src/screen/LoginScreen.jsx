import { View, Text, ImageBackground, Image, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native'
import React from 'react'
import backgroundImage from '../images/bgImage.png';
import Logo from '../images/logo.png'
export default function LoginScreen() {
  return (

    <View style={{ flex: 1, }}>
      <ScrollView >
        <ImageBackground source={backgroundImage} style={{ height:350 }} >
          <View style={{ alignItems: 'center', paddingTop: 50 }} >
            <Image source={Logo} style={{}} />
            <Text style={{ color: 'white', fontSize: 35, fontWeight: '500' }} >Login</Text>
          </View>
        </ImageBackground>
        <View style={{ flex: 0.5, marginHorizontal: 30, marginVertical: 20, }} >
          <View style={{}}>
            <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: '400' }}>User Name</Text>
            <TextInput
              style={style.inputBox}
              placeholder="Enter your username"
            />
          </View>
          <View style={{}}>
            <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: '400', paddingTop: 10 }}>Password</Text>
            <TextInput
              style={style.inputBox}
              placeholder="Enter your password"
              secureTextEntry={true}
              maxLength={20}
            />
          </View>


          <Pressable style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#e0f4f1' : '#1C93F3',
            },
            style.btn,
          ]}
          >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
          </Pressable>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
            <Text style={{ fontSize: 15 }}> Don't have an account yet?</Text>

            <Pressable>
              <Text style={{ color: '#1C93F3', fontSize: 15 }} > Sign up now!</Text>
            </Pressable>

          </View>


        </View>
      </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({
  inputBox: {
    marginTop: 10,
    borderRadius: 20,
    borderBottomWidth: 2,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#1C93F3',
    paddingLeft: 10,
    padding: 7,
    backgroundColor: '#f5f5f5',
  },
  btn: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 15,
    elevation: 10,

  },
})