import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from "firebase/app"
import "firebase/auth"


//Screens
import LoginScreen from './Login/LoginScreen';
import RegisterScreen from './Login/RegisterScreen';
import Home from './Screens/Users/Home';

import FoodView from './Screens/Users/FoodView';
import NewProducts from './Screens/Users/NewProducts';
import Perfil from "./Screens/Users/Perfil";


import PostresScreen from './Screens/Users/PostresScreen';
import RefrescoScreen from './Screens/Users/RefrescoScreen';
import TacosScreen from './Screens/Users/TacosScreen';
import HambuergesasScreen from './Screens/Users/HambuergesasScreen';
import PizzaScreen from './Screens/Users/PizzaScreen';
import MoreFoodScreen from './Screens/Users/MoreFoodScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyBj_JR3XjrOBbQT8O3jLSu1x7T4Am0oWtM",
    authDomain: "fimefoodadministrator.firebaseapp.com",
    projectId: "fimefoodadministrator",
    storageBucket: "fimefoodadministrator.appspot.com",
    messagingSenderId: "500201941617",
    appId: "1:500201941617:web:c00329a908ea1c88e0c9d0"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }


  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  })


  // firebase.onAuthStateChange(auth, (user) => {
  //   if (user != null) {
  //     console.log("We are authenticated now!");
  //   }
  // });



  return (
    <NavigationContainer>
      {isLoggedIn ? <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Foodiew" component={FoodView} options={{ headerShown: false }} />
        <Stack.Screen name="NewFood" component={NewProducts} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />

        <Stack.Screen name="PostresScreen" component={PostresScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RefrescoScreen" component={RefrescoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TacosScreen" component={TacosScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HambuergesasScreen" component={HambuergesasScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PizzaScreen" component={PizzaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MoreFoodScreen" component={MoreFoodScreen} options={{ headerShown: false }} />
      </Stack.Navigator> :
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>}
    </NavigationContainer>
  )
}

export default App

