import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,Text,View } from "react-native";
import {Button,Input,Image} from "react-native-elements"
import signal_logo from "../assets/signal_logo.png"


const LoginScreen = () =>{
    return (
        <View>
            <StatusBar stlye="light"/>
            <Image source={signal_logo}
            style={{width:200,height:200}}
            />
        </View>
    );
};


export default LoginScreen;



const styles= StyleSheet.create({});