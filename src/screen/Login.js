import React, { Component, Suspense } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import constants from 'jest-haste-map/build/constants';
// import { color, onChange } from 'react-native-reanimated';

// create a component55823
class Root extends Component {
    static navigationOptions = {
        title: 'Details',
    };
    state = {
        email: '',
        password: ''
    }
    onChangeEmail = Email => {
        this.setState(
            { email: Email, })
    }
    onChangePassword = Password => {
        this.setState(
            { password: Password, }
        )
    }
    render() {

        return (
            <View style={styles.container}>
                {/* <Image style={styles.backgroundImage} source={require('../Image/background.png')}  /> */}
                <View style={styles.headerRoot}>
                    <Image style={styles.LogoImage} source={require('../assets/images/logo.png')} />
                </View>
                <View style={styles.bodyRoot}>
                    <Text style={styles.textTitle}>Login With <Text style={styles.textTitle1}>App</Text></Text>
                    <View style={styles.inputBody}>
                        <Image style={styles.iconMail} source={require('../assets/images/logo.png')} resizeMode='contain' />
                        <TextInput placeholder='Email'
                            placeholderTextColor='white'
                            style={styles.inPut}
                            onChangeText={Email => this.onChangeEmail(Email)} />
                    </View>
                    <View style={styles.inputBody}>
                        <Image style={styles.iconMail} source={require('../assets/images/logo.png')} resizeMode='contain' />
                        <TextInput placeholder='Password'
                            placeholderTextColor='white'
                            style={styles.inPut}
                            onChangeText={Password => this.onChangePassword(Password)}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={styles.footerRoot}>
                    <TouchableOpacity style={styles.buttonSignIn}
                        // onPress={() => this.state.email == 'Hi' && this.state.password === 'hi' ? this.props.navigation.navigate('Home') : alert('Something when wrong!!!')}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={styles.textButton}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, top: 5, color: 'black' }}>Don't have account? </Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')}>
                            <Text style={{ fontSize: 15, top: 5, color: 'white' }}>Create a new account</Text>
                            </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffbf00',
    },

    headerRoot: {
        top: 20,
        flex: 0.2,
        alignItems: 'center'
    },
    bodyRoot: {
        flex: 0.6,
        alignItems: 'center',
        top: 115,
    },
    textTitle: {
        fontSize: 40,
        fontWeight: '500',
        color: 'white'

    }, textTitle1: {
        fontSize: 60,
        fontWeight: '900',
        color: 'white'

    },
    inputBody: {
        top: 10,
        borderBottomWidth: 1,
        width: 340,
        height: 55,
        borderColor: 'white',

        flexDirection: 'row'
    },
    inPut: {
        flex: 0.9,
        fontSize: 20,
        marginLeft: 20,
        color: 'white'
    },
    iconMail: {
        flex: 0.1,
        width: 30,
        height: 30,
        top: 10,
    },

    buttonSignUp: {

        width: 320,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'gray',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSignIn: {
        width: 320,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    footerRoot: { flex: 0.2, alignItems: 'center' },
    LogoImage: {
        width: 350,
        height: 350,
    },
});

//make this component available to the app
export default Root;