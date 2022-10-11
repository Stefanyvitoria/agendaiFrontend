import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity
    } 
from "react-native";
import colors, {currentTheme} from "../Constantes";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



const { width, height, fontScale } = Dimensions.get('window');

export default function CadastroUm({navigation}) {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>CADASTRO</Text>

            <View style={styles.componentes}>
            <Text style={styles.text}>Nome</Text>
                <TextInput style={styles.input} placeholder={"Your Name"}></TextInput>

                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} placeholder={"YourEmail@Agendai.com"} keyboardType="email-address"></TextInput>

                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input} placeholder={"********"} secureTextEntry={true}></TextInput>

                <PrimaryButton text={"Avançar"} onPress={() => navigation.navigate('CadastroDois')}></PrimaryButton>

                <View style={styles.row}>
                    <View style={styles.linha}></View>
                    <Text style={Object.assign({},styles.subText, {marginHorizontal: 5, color: colors.color1})}>OU</Text>
                    <View style={styles.linha}></View>
                </View>

                <View style={styles.row2}>
                    <Image style={styles.image} source={require("../../assets/images/google.png")}></Image>
                    <Image style={styles.image} source={require("../../assets/images/facebook.png")}></Image>
                </View>

                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Text style={Object.assign({}, styles.text, {fontSize : RFValue(10, width), alignSelf : 'center'})}>Possui uma conta? Login</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: "flex-start",
        paddingHorizontal : 40,
        paddingVertical : 50,
        alignItems : 'center',
    },
    title : {
        flex : 1,
        fontSize : RFPercentage(5),
        color : colors.color1,
        alignSelf : 'flex-start',
        fontFamily : 'Fredoka-Medium',
    },
    componentes : {
        flex : 6,
        alignSelf : 'flex-start',
        width : '100%',
    },
    input : {
        backgroundColor : colors.color4,
        borderRadius : 10,
        paddingHorizontal : 18,
        paddingVertical : 12,
        marginTop : 5,
        marginBottom: 15,
    },
    text : {
        color : colors.color1,
        fontSize : RFPercentage(3),
        fontFamily : 'Fredoka-Regular'
    },linha : {
        flex : 1,
        backgroundColor : colors.color1,
        height : 1.3,
    },
    row : {
        alignItems : "center",
        flexDirection: "row",
        marginBottom : 15,
        marginTop : 20,
    },
    subText : {
        color : colors.color6,
        fontSize : RFPercentage(2),
        fontFamily : 'Fredoka-Regular'
    },
    row2 : {
        alignItems : "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginHorizontal : width * 0.1,
        marginTop : 10,
        marginBottom : 20,
    },
    image : {
        width : RFValue(27, width),
        height : RFValue(27, width),
    },
});