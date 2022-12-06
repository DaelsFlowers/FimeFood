import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, TouchableHighlight, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

//bannerTop
import TopBanner from "../../assets/Top-set.png"

//Icons
import HomeIcon from "../../assets/HomeIcon.png"
import NewIcon from "../../assets/NewIcon.png"
import PerfilIcon from "../../assets/PerfilIcon.png"
import Search from "../../assets/SearchIcon.png"
import ExitIcon from "../../assets/ExitIcon.png"
//Food Imagens
import Hamburgesas from "../../assets/FHamburgesa.jpg"
import MoreFood from "../../assets/FMore.jpg"
import Pizza from "../../assets/FPizza.jpg"
import Postres from "../../assets/FPostres.jpg"
import Refrescos from "../../assets/FRefrescos.jpg"
import Tacos from "../../assets/FTacos.jpg"


export default function Home({ navigation }) {

    return <SafeAreaView style={styles.View}>
        <View style={styles.TopView}>
            <TouchableHighlight style={{ position: "absolute", zIndex: 2, margin: 10 }}
                onPress={() => firebase.auth().signOut()}>
                <Image
                    style={styles.TopBannerExitIcon}
                    source={ExitIcon} />
            </TouchableHighlight>
            <Image
                style={styles.TopBanner}
                source={TopBanner}
            />
        </View>
        <View style={styles.ContentView}>
            {/* BUSCADOR */}
            <View>
                <Text style={{ textAlign: "center", fontSize: 22, fontWeight: 'bold' }}>DE QUE TIENES ANTOJO HOY?</Text>
                {/* <View>
                <TextInput style={styles.input}
                    keyboardType="email-address"
                    placeholder='BUSCAR' />
                <TouchableOpacity style={styles.Icon2} >
                    <Image
                        style={styles.Icon2}
                        source={Search} />
                </TouchableOpacity>

            </View> */}
            </View>
            {/* TAGS */}
            <ScrollView>
                <View style={{ display: 'flex', flexDirection: 'column', flex: 1, marginTop: 50 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.TagView} onPress={() => navigation.navigate("PostresScreen")}>
                            <Image
                                style={styles.tags}
                                source={Postres} />
                            <Text style={styles.TagsName}>POSTRES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TagView} onPress={() => navigation.navigate("RefrescoScreen")}>
                            <Image
                                style={styles.tags}
                                source={Refrescos} />
                            <Text style={styles.TagsName}>BEBIDAS</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.TagView} onPress={() => navigation.navigate("TacosScreen")}>
                            <Image
                                style={styles.tags}
                                source={Tacos} />
                            <Text style={styles.TagsName}>TACOS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TagView} onPress={() => navigation.navigate("PizzaScreen")}>
                            <Image
                                style={styles.tags}
                                source={Pizza} />
                            <Text style={styles.TagsName}>PIZZA</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.TagView} onPress={() => navigation.navigate("HambuergesasScreen")}>
                            <Image
                                style={styles.tags}
                                source={Hamburgesas} />
                            <Text style={styles.TagsName2}>HAMBURGESAS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.TagView} onPress={() => navigation.navigate("MoreFoodScreen")}>
                            <Image
                                style={styles.tags}
                                source={MoreFood} />
                            <Text style={styles.TagsName}>MAS COMIDA</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </View>
        <View style={styles.tabzone}>
            <View style={{ display: "flex", flex: 3, flexDirection: "row" }}>
                <TouchableOpacity >
                    <Image
                        style={styles.Icon}
                        source={HomeIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("NewFood")}>
                    <Image
                        style={styles.Icon}
                        source={NewIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
                    <Image
                        style={styles.Icon}
                        source={PerfilIcon} />
                </TouchableOpacity>


            </View>
        </View>
    </SafeAreaView>
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
        flex: 6,

    },
    TopBanner: {
        width: "100%",
        height: 100,
        resizeMode: 'stretch',
    },
    TopBannerExitIcon: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    tabzone: {
        height: 75,
        backgroundColor: "#1e8942",
    },
    Icon: {
        height: 110,
        width: 110,
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
        marginVertical: 4,
        marginRight: 7,
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
    TagView: {
        width: "50%",
        padding: 10,
        height: 150
    },
    tags: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
        flex: 1,
    },
    TagsName: {
        position: "absolute",
        width: "100%",
        bottom: 0,
        margin: 10,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255,255, 255, 0.5)'
    },
    TagsName2: {
        position: "absolute",
        width: "100%",
        bottom: 0,
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255,255, 255, 0.5)'
    },
});