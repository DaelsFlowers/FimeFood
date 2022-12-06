import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, TouchableHighlight, ScrollView, Button, Alert, FlatList, TouchableOpacity, Linking, Platform, } from 'react-native'
import React, { useState, useEffect } from 'react'
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

//bannerTop
import TopBanner from "../../assets/Top-set.png"

import WhatsappIcon from "../../assets/whatsappicon.png"
//Food Imagens
import ImagenPref from "../../assets/FTacos.jpg"



export default function TacosScreen({ navigation }) {

    const auth = firebase.auth;
    const firestore = firebase.firestore;
    const [productsList, setProductsList] = useState([]);
    async function loadData() {
        try {
            firestore().collection("Productos").where("categoria", "==", "TACOS").get().then((query) => {
                const ProductList = []
                query.forEach(doc => {
                    ProductList.push(doc.data())
                })
                setProductsList(ProductList)
                console.log(doc.id, " => ", doc.data());
            })
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        loadData()
    }, [])
    function SendMessaje(cell) {
        const msg = "Hola vi tu publicacion en la aplicacion de FimeFood"
        const mobile = "52" + cell

        if (mobile) {
            if (msg) {
                const url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
                Linking.openURL(url)
                    .then(data => {
                        console.log("Open")
                    }).catch(() => {
                        alert("ASEGURA TENER WHATSAPP EN TU DISPOSITIVO")
                    })
            }
        }
    }
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
                    <Text style={{ textAlign: "center", fontSize: 22, fontWeight: 'bold' }}>TACOS</Text>
                </View>


                {/* products */}
                <ScrollView>
                    <FlatList data={productsList}
                        renderItem={({ item }) =>
                            <View style={{ display: 'flex', flexDirection: 'column', flex: 1, marginTop: 25 }}>

                                <View style={styles.Card}>
                                    <View style={styles.CardImagen}>
                                        <Image
                                            style={styles.CardImagenImg}
                                            source={ImagenPref}
                                        />
                                    </View>
                                    <View style={styles.CardInfo}>
                                        <Text style={styles.ProductName}>{item.name}</Text>
                                        <Text style={styles.ProductSeller}>{item.user}</Text>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            marginTop: 5
                                        }}>HORARIO:</Text>
                                        <Text style={styles.ProductoHorario}>{item.horario}</Text>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            fontSize: 14,
                                            marginTop: 5
                                        }}>COSTO:</Text>
                                        <Text style={styles.ProductCosto}>${item.costo}</Text>
                                        <TouchableOpacity onPress={() => SendMessaje(item.phone)}>
                                            <View style={styles.ButtonWhats}>
                                                <Image
                                                    style={styles.CardImagenWhsp}
                                                    source={WhatsappIcon}
                                                />
                                                <Text style={styles.ProductWhatsText} >ENVIAR WHATSAPP</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        } keyExtractor={(item, index) => index.toString()} />
                </ScrollView>
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