import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'

//bannerTop
import TopBanner from "../../assets/Top-set.png"

//Icons
import HomeIcon from "../../assets/HomeIcon.png"
import NewIcon from "../../assets/NewIcon.png"
import PerfilIcon from "../../assets/PerfilIcon.png"
import Search from "../../assets/SearchIcon.png"
import WhatsappIcon from "../../assets/whatsappicon.png"
//Food Imagens
import Hamburgesas from "../../assets/FHamburgesa.jpg"
import MoreFood from "../../assets/FMore.jpg"


export default function FoodView(tag, { navigation }) {
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
                {/* BUSCADOR */}
                <View>
                    <Text style={{ textAlign: "center", fontSize: 22, fontWeight: 'bold' }}>POSTRES</Text>
                    <View>
                        <TextInput style={styles.input}
                            keyboardType="email-address"
                            placeholder='BUSCAR'
                        />
                        <Image
                            style={styles.Icon2}
                            source={Search}
                        />
                    </View>

                </View>


                {/* products */}

                <View style={{ display: 'flex', flexDirection: 'column', flex: 1, marginTop: 25 }}>
                    <ScrollView>
                        <View style={styles.Card}>
                            <View style={styles.CardImagen}>
                                <Image
                                    style={styles.CardImagenImg}
                                    source={Hamburgesas}
                                />
                            </View>
                            <View style={styles.CardInfo}>
                                <Text style={styles.ProductName}>GOMITAS CON CHAMOY</Text>
                                <Text style={styles.ProductSeller}>JUAN ALBERTO MARTINEZ</Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    marginTop: 5
                                }}>HORARIO:</Text>
                                <Text style={styles.ProductoHorario}>12:30AM-19:00PM</Text>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    marginTop: 5
                                }}>COSTO:</Text>
                                <Text style={styles.ProductCosto}>$10.00</Text>
                                <View style={styles.ButtonWhats}>
                                    <Image
                                        style={styles.CardImagenWhsp}
                                        source={WhatsappIcon}
                                    />
                                    <Text style={styles.ProductWhatsText}>ENVIAR WHATSAPP</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
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
    tabzone: {
        height: 75,
        backgroundColor: "#1e8942",
    },
    Icon: {
        height: "75%",
        width: "75%",
        resizeMode: 'contain',
        flex: 1,
        margin: 10,
    },
    Icon2: {
        height: 45,
        width: 45,
        resizeMode: 'contain',
        position: 'absolute',
        right: 0,
        marginVertical: 8,
        marginRight: 15,
    },
    input: {
        marginTop: 10,
        marginHorizontal: 10,
        height: 40,
        borderWidth: 1,
        borderColor: "#3D3D3D",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.00,
        elevation: 5,
        borderRadius: 10,
        padding: 10
    },

    //END BASE

    Card: {
        width: "95%",
        height: 125,
        backgroundColor: "#fff",
        margin: 10,
        shadowColor: "rgba(30, 137, 66, 0.58)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 5,
        borderColor: "rgba(30, 137, 66, 0.58)",
        borderWidth: 1,
        alignSelf: "center",
        display: 'flex',
        flexDirection: "row"
    },
    CardImagen: {
        //backgroundColor: "#000",
        width: "30%",
        height: "100%",
        paddingVertical: 5,
    },
    CardImagenImg: {
        height: "95%",
        width: "90%",
        resizeMode: 'cover',
        alignSelf: "center",
        marginTop: 3,
        borderRadius: 5,
        borderColor: "rgba(0, 0,0, 0.48)",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 15,
    },
    CardInfo: {
        //backgroundColor: "#0F0",
        width: "70%",
        height: "100%",
        padding: 5,
    },
    ProductName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    ProductSeller: {
        fontWeight: '500',
        fontSize: 8
    },
    ProductoHorario: {
        fontWeight: '500',
        fontSize: 14,
    },
    ProductCosto: {
        fontWeight: '500',
        fontSize: 14,
    },
    ButtonWhats: {
        position: "absolute",
        right: 5,
        bottom: 10,
        width: 100,
        height: 35,
        backgroundColor: "#29A71A",
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        flex: 1
    },
    CardImagenWhsp: {
        height: 30,
        width: "20%",
        marginTop: 2,
        borderRadius: 5,
        marginLeft: 5
        // backgroundColor: "#fff"
    },
    ProductWhatsText: {
        // backgroundColor: "#000",
        width: "75%",
        fontSize: 10,
        color: "#fff",
        fontWeight: 'bold',
        textAlign: "center",
        marginTop: 3
    },
});