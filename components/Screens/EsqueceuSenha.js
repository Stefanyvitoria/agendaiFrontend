import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Dimensions
    } 
from "react-native";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import colors, {currentTheme} from "../Constantes";


export default function EsqueceuSenha({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>RECUPERAR A SENHA</Text>

            <View style={styles.componentes}>

                <Text style={Object.assign({}, styles.text, {marginBottom : 30})}>Informe seu endereço de email e enviaremos um email para recuperação.</Text>

                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.input} placeholder={"YourEmail@Agendai.com"} keyboardType="email-address"></TextInput>

                <PrimaryButton text={"Enviar"} onPress={() => navigation.goBack()}></PrimaryButton>

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
        fontSize : RFPercentage(4.5),
        color : colors.color1,
        alignSelf : 'flex-start',
        fontFamily : 'Fredoka-Medium',
    },
    componentes : {
        flex : 6,
        alignSelf : 'flex-start',
        width : '100%',
    },
    text : {
        color : colors.color1,
        fontSize : RFPercentage(3),
        fontFamily : 'Fredoka-Regular'
    },
    input : {
        backgroundColor : colors.color4,
        borderRadius : 10,
        paddingHorizontal : 18,
        paddingVertical : 12,
        marginTop : 5,
        marginBottom: 15,
    },
});