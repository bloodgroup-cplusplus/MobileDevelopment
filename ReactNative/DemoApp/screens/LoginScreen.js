import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView, StyleSheet,Text,View } from "react-native";
import {Button,Input,Image} from "react-native-elements"
import signal_logo from "../assets/signal_logo.png"
import { useState } from "react";


const LoginScreen = () =>{
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const signIn=()=>{};
    return (
        <View>
            <KeyboardAvoidingView>
            <StatusBar stlye="light"/>
            <Image source={signal_logo}
            style={{width:200,height:200}}
            />
            <View style={styles.inputContainer}>
            <Input placeholder="Email" autoFocus type="Email" value={email} onChangeText={text=>setEmail(text)}/>
            <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={text=>setPassword(text)}/>
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
            <Button containerStyle={styles.button} type="outline" title="Register"/>
            <View style={{height:100}}/>
            </KeyboardAvoidingView>


        </View>
    );
};


export default LoginScreen;



const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white",
    },
    inputContainer:{
        width:300,

    },
    button:{
        width:200,
        marginTop:10,
    },
});