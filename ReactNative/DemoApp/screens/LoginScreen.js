import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet,Text,View } from "react-native";
import {Button,Input,Image} from "react-native-elements"
import signal_logo from "../assets/signal_logo.png"
import { useState } from "react";


const LoginScreen = () =>{
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    return (
        <View>
            <StatusBar stlye="light"/>
            <Image source={signal_logo}
            style={{width:200,height:200}}
            />
            <View style={styles.inputContainer}></View>
            <Input placeholder="Email" autoFocus type="Email" value={email} onChangeText={text=>setEmail(text)}/>
            <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={text=>setPassword(password)}/>
        </View>
    );
};


export default LoginScreen;



const styles= StyleSheet.create({
    inputContainer:{

    }
});