import { View, Text, Image, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
//bannerTop
import TopBanner from "../../assets/Top-set.png"
import PerfilImg from "../../assets/PerfilImg.png"

const PerfilSeller = () => {

    return (

        <SafeAreaView style={styles.View}>

            <View style={styles.TopView}>
                {/* <View style={styles.TopViewAux}></View> */}
                <Image
                    style={styles.TopBanner}
                    source={TopBanner}
                />
            </View>


            <View style={styles.ContentView}>
                <Text style={{ textAlign: "center", fontSize: 22, fontWeight: 'bold' }}>PERFIL</Text>



                <View style={styles.LoginView}>
                    <Image
                        style={styles.PerfilImg}
                        source={PerfilImg}
                    />
                    <Text style={styles.Label}>NOMBRE</Text>
                    <View style={styles.input} >
                        <TextInput placeholder="NOMBRE" style={styles.inputIn} />
                    </View>
                    <Text style={styles.Label}>CORREO</Text>
                    <View style={styles.input} >
                        <TextInput placeholder="CORREO" style={styles.inputIn} />
                    </View>

                    <Text style={styles.Label}>CONTRASEÑA</Text>
                    <View style={styles.input} >
                        <TextInput placeholder="CONTRASEÑA" style={styles.inputIn} />
                    </View>

                    <Text style={styles.Label}>TELEFONO</Text>
                    <View style={styles.input} >
                        <TextInput placeholder="TELEFONO" style={styles.inputIn} />
                    </View>
                    <View style={styles.buttonRegister} >
                        <Text style={{ color: "#fff", fontSize: 18, textAlign: "center", marginTop: 5 }} >CAMBIAR DATOS</Text>
                    </View>
                    <View>
                        <BouncyCheckbox
                            size={25}
                            fillColor="red"
                            text='QUIERO BORRAR MI CUENTA'
                            unfillColor="#FFFFFF"
                            innerIconStyle={{ borderWidth: 2 }}
                            style={{ alignSelf: "center", marginTop: 20 }}
                        />
                    </View>
                    <View style={styles.buttonCancel} >
                        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center", marginTop: 8 }} >BORRAR CUENTA</Text>
                    </View>
                </View>



            </View>




        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    //BASE
    View: {
        backgroundColor: "#fff",
        flex: 3,
    },
    TopView: {
        //backgroundColor: "#f0f",
        flex: 1,
    },
    ContentView: {
        //        backgroundColor: "#ff0",
        flex: 6,

    },
    TopBanner: {
        width: "100%",
        height: 100,
        resizeMode: 'stretch',
    },


    //END BASE
    LoginView: {
        backgroundColor: "#fff",
        marginTop: 10,
        width: "90%",
        alignSelf: "center",
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
    PerfilImg: {
        marginTop: 10,
        height: 100,
        width: 100,
        resizeMode: 'stretch',
        alignSelf: "center",
    },
    Label: {
        textAlign: "center",
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0,0, 0.48)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        width: "80%",
        alignSelf: "center",
        borderColor: "rgba(0, 0,0, 0.25)",
        borderWidth: 1,
    },
    inputIn: {
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16
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
    },
    buttonCancel: {
        backgroundColor: "#891e1e",
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


export default PerfilSeller