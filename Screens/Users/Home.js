import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'

//bannerTop
import TopBanner from "../../assets/Top-set.png"

//Icons
import HomeIcon from "../../assets/HomeIcon.png"
import NewIcon from "../../assets/NewIcon.png"
import PerfilIcon from "../../assets/PerfilIcon.png"
import Search from "../../assets/SearchIcon.png"

//Food Imagens
import Hamburgesas from "../../assets/FHamburgesa.jpg"
import MoreFood from "../../assets/FMore.jpg"
import Pizza from "../../assets/FPizza.jpg"
import Postres from "../../assets/FPostres.jpg"
import Refrescos from "../../assets/FRefrescos.jpg"
import Tacos from "../../assets/FTacos.jpg"



const Home = () => {

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
                    <Text style={{ textAlign: "center", fontSize: 22, fontWeight: 'bold' }}>DE QUE TIENES ANTOJO HOY?</Text>
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


                {/* TAGS */}
                <View style={{ display: 'flex', flexDirection: 'column', flex: 1, marginTop: 50 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.TagView}>
                            <Image
                                style={styles.tags}
                                source={Postres}
                            />
                            <Text style={styles.TagsName}>POSTRES</Text>
                        </View>
                        <View style={styles.TagView}>
                            <Image
                                style={styles.tags}
                                source={Refrescos}
                            />
                            <Text style={styles.TagsName}>BEBIDAS</Text>
                        </View>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.TagView}>
                            <Image
                                style={styles.tags}
                                source={Tacos}
                            />
                            <Text style={styles.TagsName}>TACOS</Text>
                        </View>
                        <View style={styles.TagView}>
                            <Image
                                style={styles.tags}
                                source={Pizza}
                            />
                            <Text style={styles.TagsName}>PIZZA</Text>
                        </View>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.TagView}>
                            <Image
                                style={styles.tags}
                                source={Hamburgesas}
                            />
                            <Text style={styles.TagsName2}>HAMBURGESAS</Text>
                        </View>
                        <View style={styles.TagView}>
                            <Image
                                style={styles.tags}
                                source={MoreFood}
                            />
                            <Text style={styles.TagsName}>MAS COMIDA</Text>
                        </View>

                    </View>
                </View>
            </View>


            <View style={styles.tabzone}>
                <View style={{ display: "flex", flex: 3, flexDirection: "row" }}>
                    <Image
                        style={styles.Icon}
                        source={HomeIcon}
                    />
                    <Image
                        style={styles.Icon}
                        source={NewIcon}
                    />
                    <Image
                        style={styles.Icon}
                        source={PerfilIcon}
                    />
                </View>
            </View>

        </SafeAreaView>

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

export default Home