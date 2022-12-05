import { View, Text, Image, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
//bannerTop
import TopBanner from "../../assets/Top-set.png"

//Icons
import ProductsIcon from "../../assets/ProducstIcon.png"
import PerfilIcon from "../../assets/PerfilIcon.png"
import ImgPicker from "../../assets/ImgPicker.png"

//Food Imagens
import Hamburgesas from "../../assets/ImgPref.png"


const HomeSeller = () => {
    const [rol, setRol] = useState();
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
                    <Text style={{ textAlign: "center", fontSize: 22, fontWeight: 'bold' }}>PRODUCTOS</Text>
                </View>
                <View style={{ marginVertical: 2 }}>
                    <View style={styles.Card}>
                        <View style={styles.CardImagen}>
                            <Text style={styles.Label2}>IMAGEN</Text>
                            <View>
                                <Image
                                    style={styles.ImgPicker}
                                    source={ImgPicker} />
                                <Image
                                    style={styles.CardImagenImg}
                                    source={Hamburgesas} />
                            </View>
                        </View>
                        <View style={styles.CardInfo}>
                            <Text style={styles.Label}>PRODUCTO</Text>
                            <View style={styles.input} >
                                <TextInput placeholder="PRODUCTO" style={styles.inputIn} />
                            </View>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ marginRight: 5 }}>
                                    <Text style={styles.Label}>HORARIO</Text>
                                    <View style={styles.input} >
                                        <TextInput placeholder="HORARIO" style={styles.inputIn} />
                                    </View>
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <Text style={styles.Label}>COSTO</Text>
                                    <View style={styles.input} >
                                        <TextInput placeholder="COSTO" style={styles.inputIn} />
                                    </View>
                                </View>
                            </View>
                            <View style={{}}>
                                <Text style={styles.Label}>CATEGORIA</Text>
                                <View style={{ borderColor: "#000", borderWidth: 1, width: "100%", height: 40 }}>
                                    <Picker
                                        selectedValue={rol}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setRol(itemValue)}>
                                        <Picker.Item label="POSTRES" value="POSTRES" style={{ fontSize: 14 }} />
                                        <Picker.Item label="BEBIDAS" value="BEBIDAS" style={{ fontSize: 14 }} />
                                        <Picker.Item label="TACOS" value="TACOS" style={{ fontSize: 14 }} />
                                        <Picker.Item label="PIZZA" value="PIZZA" style={{ fontSize: 14 }} />
                                        <Picker.Item label="HAMBURGESAS" value="HAMBURGESAS" style={{ fontSize: 14 }} />
                                        <Picker.Item label="OTROS" value="OTROS" style={{ fontSize: 14 }} />
                                    </Picker>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.buttonadd} >
                            <Text style={{ color: "#fff", fontSize: 18, textAlign: "center", marginTop: 5 }} >GUARDAR</Text>
                        </View>
                        <View style={styles.buttondelete} >
                            <Text style={{ color: "#fff", fontSize: 16, textAlign: "center", marginTop: 8 }} >ELIMINAR</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 2 }}>
                    <View style={styles.Card}>
                        <View style={styles.CardImagen}>
                            <Text style={styles.Label2}>IMAGEN</Text>
                            <View>
                                <Image
                                    style={styles.ImgPicker}
                                    source={ImgPicker} />
                                <Image
                                    style={styles.CardImagenImg}
                                    source={Hamburgesas} />
                            </View>
                        </View>
                        <View style={styles.CardInfo}>
                            <Text style={styles.Label}>PRODUCTO</Text>
                            <View style={styles.input} >
                                <TextInput placeholder="PRODUCTO" style={styles.inputIn} />
                            </View>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ marginRight: 5 }}>
                                    <Text style={styles.Label}>HORARIO</Text>
                                    <View style={styles.input} >
                                        <TextInput placeholder="HORARIO" style={styles.inputIn} />
                                    </View>
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <Text style={styles.Label}>COSTO</Text>
                                    <View style={styles.input} >
                                        <TextInput placeholder="COSTO" style={styles.inputIn} />
                                    </View>
                                </View>
                            </View>
                            <View style={{}}>
                                <Text style={styles.Label}>CATEGORIA</Text>
                                <View style={{ borderColor: "#000", borderWidth: 1, width: "100%", height: 40 }}>
                                    <Picker
                                        selectedValue={rol}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setRol(itemValue)}>
                                        <Picker.Item label="POSTRES" value="POSTRES" style={{ fontSize: 14 }} />
                                        <Picker.Item label="BEBIDAS" value="BEBIDAS" style={{ fontSize: 14 }} />
                                        <Picker.Item label="TACOS" value="TACOS" style={{ fontSize: 14 }} />
                                        <Picker.Item label="PIZZA" value="PIZZA" style={{ fontSize: 14 }} />
                                        <Picker.Item label="HAMBURGESAS" value="HAMBURGESAS" style={{ fontSize: 14 }} />
                                        <Picker.Item label="OTROS" value="OTROS" style={{ fontSize: 14 }} />
                                    </Picker>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.buttonadd} >
                            <Text style={{ color: "#fff", fontSize: 18, textAlign: "center", marginTop: 5 }} >GUARDAR</Text>
                        </View>
                        <View style={styles.buttondelete} >
                            <Text style={{ color: "#fff", fontSize: 16, textAlign: "center", marginTop: 8 }} >ELIMINAR</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 2 }}>
                    <View style={styles.Card}>
                        <View style={styles.CardImagen}>
                            <Text style={styles.Label2}>IMAGEN</Text>
                            <View>
                                <Image
                                    style={styles.ImgPicker}
                                    source={ImgPicker} />
                                <Image
                                    style={styles.CardImagenImg}
                                    source={Hamburgesas} />
                            </View>
                        </View>
                        <View style={styles.CardInfo}>
                            <Text style={styles.Label}>PRODUCTO</Text>
                            <View style={styles.input} >
                                <TextInput placeholder="PRODUCTO" style={styles.inputIn} />
                            </View>
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <View style={{ marginRight: 5 }}>
                                    <Text style={styles.Label}>HORARIO</Text>
                                    <View style={styles.input} >
                                        <TextInput placeholder="HORARIO" style={styles.inputIn} />
                                    </View>
                                </View>
                                <View style={{ marginLeft: 5 }}>
                                    <Text style={styles.Label}>COSTO</Text>
                                    <View style={styles.input} >
                                        <TextInput placeholder="COSTO" style={styles.inputIn} />
                                    </View>
                                </View>
                            </View>
                            <View style={{}}>
                                <Text style={styles.Label}>CATEGORIA</Text>
                                <View style={{ borderColor: "#000", borderWidth: 1, width: "100%", height: 40 }}>
                                    <Picker
                                        selectedValue={rol}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setRol(itemValue)}>
                                        <Picker.Item label="POSTRES" value="POSTRES" style={{ fontSize: 14 }} />
                                        <Picker.Item label="BEBIDAS" value="BEBIDAS" style={{ fontSize: 14 }} />
                                        <Picker.Item label="TACOS" value="TACOS" style={{ fontSize: 14 }} />
                                        <Picker.Item label="PIZZA" value="PIZZA" style={{ fontSize: 14 }} />
                                        <Picker.Item label="HAMBURGESAS" value="HAMBURGESAS" style={{ fontSize: 14 }} />
                                        <Picker.Item label="OTROS" value="OTROS" style={{ fontSize: 14 }} />
                                    </Picker>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.buttonadd} >
                            <Text style={{ color: "#fff", fontSize: 18, textAlign: "center", marginTop: 5 }} >GUARDAR</Text>
                        </View>
                        <View style={styles.buttondelete} >
                            <Text style={{ color: "#fff", fontSize: 16, textAlign: "center", marginTop: 8 }} >ELIMINAR</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ textAlign: "center" }}>
                    SOLO SE PUEDEN PUBLICAR 3 PRODUCTOS POR VENDEDOR Y EL COSTO TIENE QUE SER MENOR O IGUAL A $500.00
                </Text>

            </View>


            <View style={styles.tabzone}>
                <View style={{ display: "flex", flex: 3, flexDirection: "row" }}>
                    <Image
                        style={styles.Icon}
                        source={ProductsIcon}
                    />

                    <Image
                        style={styles.Icon}
                        source={PerfilIcon}
                    />
                </View>
            </View>

        </SafeAreaView >

    )
}

const styles = StyleSheet.create({

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
        flex: 7,

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
    Card: {
        width: "95%",
        height: 155,
        backgroundColor: "#fff",
        marginHorizontal: 10,
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
        height: "85%",
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
    Label: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    Label2: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "center"
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
        width: "100%",
        minWidth: "49%",
        borderColor: "rgba(0, 0,0, 0.25)",
        borderWidth: 1,
    },
    inputIn: {
        width: "100%",
        height: 20,
        fontSize: 12
    },
    buttonadd: {
        backgroundColor: "#1E8942",
        marginLeft: 10,
        width: "47.5%",
        height: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttondelete: {
        backgroundColor: "#891e1e",

        width: "47.5%",
        height: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    ImgPicker: {
        position: "absolute",
        marginTop: 40,
        width: "25%",
        height: "25%",
        alignSelf: "center",
        backgroundColor: 'rgba(255,255, 255, 0.5)',
        zIndex: 2
    }
});
export default HomeSeller