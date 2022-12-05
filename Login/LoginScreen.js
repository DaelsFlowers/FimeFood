import { View, Text, Image, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React from 'react'

import TopBanner from "../assets/Top-login.png"
import BottonBanner from "../assets/botton-login.png"

const LoginScreen = () => {

    return (

        <SafeAreaView style={styles.View}>

            <View style={styles.TopView}>
                <View style={styles.TopViewAux}></View>
                <Image
                    style={styles.TopBanner}
                    source={TopBanner}
                />
            </View>
            <View style={styles.ContentView}>
                <View style={styles.LoginView}>
                    <Text style={{ textAlign: "center", fontSize: 24, marginTop: 20, }}>INICIAR SESION</Text>
                    <Text style={{ marginLeft: 30, fontSize: 16, marginTop: 50, }}>CORREO</Text>
                    <TextInput style={styles.input}
                        keyboardType="email-address" />
                    <Text style={{ marginLeft: 30, fontSize: 16, marginTop: 50, }}>CONTRASEÑA</Text>
                    <TextInput style={styles.input}
                        keyboardType="email-address" />
                    <View style={styles.buttonLogin} >
                        <Text style={{ color: "#fff", fontSize: 18, textAlign: "center", marginTop: 5 }} >INGRESAR</Text>
                    </View>
                </View>
                <View style={styles.RegisterView}>
                    <Text style={{ textAlign: "center", fontSize: 20, marginTop: 18, width: 300, alignSelf: "center" }}>CREA UNA CUENTA PARA ACCEDER A LA APLICACION</Text>
                    <View style={styles.buttonRegister} >
                        <Text style={{ color: "#fff", fontSize: 18, textAlign: "center", marginTop: 5 }} >REGISTRATE</Text>
                    </View>
                </View>
            </View>


            <View style={styles.bottonView}>
                <Image
                    style={styles.BottonBanner}
                    source={BottonBanner}
                />
            </View>

        </SafeAreaView>

    )
}


const styles = StyleSheet.create({

    View: {
        backgroundColor: "#fff",
        flex: 1,
    },
    TopView: {
        //backgroundColor: "#f0f",
        flex: 1,
    },
    bottonView: {
        //backgroundColor: "#0ff",
        flex: 1,
        justifyContent: "flex-end"
    },
    TopViewAux: {
        height: 20,
        backgroundColor: "#1e8942"
    },
    ContentView: {
        //backgroundColor: "#ff0",
        marginTop: 50,
    },
    LoginView: {
        backgroundColor: "#fff",
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 25,
    },
    RegisterView: {
        backgroundColor: "#fff",
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 25,
    },
    TopBanner: {
        width: "100%",
        height: 140,
        resizeMode: 'stretch',
    },
    BottonBanner: {
        width: "100%",
        height: 90,
        resizeMode: 'stretch',
    },
    input: {
        marginTop: 10,
        marginHorizontal: 30,
        height: 40,
        borderWidth: 1,
        borderColor: "#fff",
        borderBottomColor: "#000"
    },
    buttonLogin: {
        backgroundColor: "#1E8942",
        margin: 25,
        width: 175,
        height: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        alignSelf: "center",
    },
    buttonRegister: {
        backgroundColor: "#1e3c89",
        margin: 25,
        width: 175,
        height: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        alignSelf: "center",
    }
});

export default LoginScreen