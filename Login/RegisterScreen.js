import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

import TopBanner from "../assets/Top-login.png"
import BottonBanner from "../assets/botton-login.png"

const RegisterScreen = () => {
    const [rol, setRol] = useState();
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
                    <Text style={{ textAlign: "center", fontSize: 24, marginTop: 10, }}>CREA UN PERFIL</Text>

                    <Text style={{ marginLeft: 30, fontSize: 14, marginTop: 10, }}>NOMBRE</Text>
                    <TextInput style={styles.input}
                        keyboardType="default" />
                    <Text style={{ marginLeft: 30, fontSize: 14, marginTop: 10, }}>CORREO</Text>
                    <TextInput style={styles.input}
                        keyboardType="default" />
                    <Text style={{ marginLeft: 30, fontSize: 14, marginTop: 10, }}>CONTRASEÑA</Text>
                    <TextInput style={styles.input}
                        keyboardType="default" />
                    <Text style={{ marginLeft: 30, fontSize: 14, marginTop: 10, }}>CONTRASEÑA</Text>
                    <TextInput style={styles.input}
                        keyboardType="default" />

                    <Text style={{ marginLeft: 30, fontSize: 14, marginTop: 10, }}>TIPO DE PERFIL</Text>
                    <View style={{ marginHorizontal: 25, borderColor: "#000", borderStyle: "solid", borderWidth: 1, marginTop: 5 }}>
                        <Picker
                            selectedValue={rol}
                            onValueChange={(itemValue, itemIndex) =>
                                setRol(itemValue)
                            }>
                            <Picker.Item label="USUARIO" value="Usuario" />
                            <Picker.Item label="VENDEDOR" value="Vendedor" />
                        </Picker>
                    </View>

                    <View>
                        <Text style={{ marginLeft: 30, fontSize: 14, marginTop: 10, }}>TELEFONO</Text>
                        <TextInput style={styles.input}
                            keyboardType="default" />
                    </View>
                    <View style={styles.buttonRegister} >
                        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center", marginTop: 8 }} >REGISTRARSE</Text>
                    </View>

                </View>
                <View style={styles.RegisterView}>
                    <Text style={{ textAlign: "center", fontSize: 16, marginTop: 18, width: 300, alignSelf: "center" }}>YA CUENTRAS CON UN PERFIL?</Text>
                    <View style={styles.buttonLogin} >
                        <Text style={{ color: "#fff", fontSize: 18, textAlign: "center", marginTop: 5 }} >INICIAR SESION</Text>
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
        marginTop: 5,
        marginHorizontal: 30,
        height: 25,
        borderWidth: 1,
        borderColor: "#fff",
        borderBottomColor: "#000"
    },
    buttonLogin: {
        backgroundColor: "#1E8942",
        margin: 5,
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
        margin: 15,
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
export default RegisterScreen