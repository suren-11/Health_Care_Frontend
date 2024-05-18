import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StatusBar, TextInput, StyleSheet, Pressable, ScrollView, SafeAreaView } from 'react-native';
import backgroundImage from '../../images/bgImage.png';
import Logo from '../../images/logo.png';
import { TextInput as PaperTextInput,} from 'react-native-paper';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
       
    };
    const hadleShowConfirmPassword = () =>{
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSignUp = () => {
        // Validation
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!username) {
            errors.username = 'Username is required';
        }
        if (!email) {
            errors.email = 'Email is required';
        } else if (!emailPattern.test(email)) {
            errors.email = 'Invalid email address';
        }   
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }
        if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        // Handle sign up logic
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor={'#1C93F3'} />
            <ScrollView>
                <View style={styles.container}>

                    <View style={{ flex: 0.5, }}>
                        <ImageBackground source={backgroundImage} resizeMethod='resize' resizeMode='stretch'>
                            <View style={styles.logoContainer}>
                                <Image source={Logo} style={styles.logo} resizeMode='contain' />
                                <Text style={styles.loginTitle}>Sign Up</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.formContainer}>
                        <View style={styles.inputWrapper}>
                            <PaperTextInput
                                style={styles.input}
                                mode='outlined'
                                label={'Username'}
                                outlineColor={errors.username ? 'red' : '#1C93F3'}
                                activeOutlineColor={errors.username ? 'red' : '#1C93F3'}
                                value={username}
                                onChangeText={setUsername}
                            />
                            {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

                        </View>
                        <View style={styles.inputWrapper}>
                            <PaperTextInput
                                style={styles.input}
                                mode='outlined'
                                label={'Email Address'}
                                outlineColor={errors.email ? 'red' : '#1C93F3'}
                                activeOutlineColor={errors.email ? 'red' : '#1C93F3'}
                                value={email}
                                onChangeText={setEmail}
                            />
                            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                  
                        </View>
                        <View style={styles.inputWrapper}>
                            <PaperTextInput
                                style={styles.input}
                                mode='outlined'
                                label={'Password'}
                                right={<PaperTextInput.Icon icon={showPassword ? 'eye-off' : 'eye'}  onPress={handleTogglePasswordVisibility} />}
                                outlineColor={errors.password ? 'red' : '#1C93F3'}
                                activeOutlineColor={errors.password ? 'red' : '#1C93F3'}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                            />
                            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                        </View>
                        <View style={styles.inputWrapper}>
                            <PaperTextInput
                                style={styles.input}
                                mode='outlined'
                                label={'Confirm Password'}
                                right={<PaperTextInput.Icon icon={showConfirmPassword ? 'eye-off' : 'eye'}  onPress={hadleShowConfirmPassword} />}
                                outlineColor={errors.confirmPassword ? 'red' : '#1C93F3'}
                                activeOutlineColor={errors.confirmPassword ? 'red' : '#1C93F3'}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry={!showConfirmPassword}
                            />
                            {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
                        </View>
                        <Pressable
                            style={({ pressed }) => [{ backgroundColor: pressed ? '#e0f4f1' : '#1C93F3' },
                            styles.button]}
                            onPress={handleSignUp}
                        >
                            <Text style={styles.buttonText}>Sign Up Now</Text>
                        </Pressable>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
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
    errorText: {
        marginLeft: 10,
        color: 'red',
    },
    input: {
        backgroundColor: 'transparent',
        height: 40,
        marginTop:8
    },
});
export default SignUpScreen