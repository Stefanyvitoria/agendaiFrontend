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
import CheckBox from "@react-native-community/checkbox";
import colors, {currentTheme} from "../Constantes";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { HOST } from '@env';

const { width, height, fontScale } = Dimensions.get('window');

export default function LoginUm({navigation}) {

    function onPress(email, senha) {
        if (email == '') {
            setErrorEmail(true);
        }

        if (senha == '') {
            setErrorSenha(true);
        }

        console.log(email,senha);
        
        // fetch(HOST+'login', {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             user: email,
        //             passw: senha,
        //         }),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //         },
        //     })
        //     .then((response) => response.json())
        //     .then((json) => setResult(json.result));

        navigation.navigate('LoginDois')
    }

    function onChangeEmail (value) {
        setErrorEmail(false);
        setEmail(value)
    }

    function onChangeSenha (value) {
        setErrorSenha(false);
        setSenha(value);
    }

    const [isSelected, setSelection] = useState(true);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);

    const [result, setResult] = useState("***");

    return (
        <View style={styles.container}>

            <Text style={styles.title}>LOGIN</Text>

            <View style={styles.componentes}>
                <Text style={styles.text}>{result}</Text>
                <Text style={styles.text}>Email</Text>
                <TextInput style={errorEmail ? styles.inputError :styles.input} 
                        placeholder={"YourEmail@Dominio.com"} 
                        keyboardType="email-address" 
                        onChangeText={(value) => onChangeEmail(value)}
                        >
                </TextInput>

                <Text style={styles.text}>Password</Text>
                <TextInput style={errorSenha ? styles.inputError :styles.input} 
                    onChangeText={(value) => onChangeSenha(value)} 
                    placeholder={"********"} 
                    secureTextEntry={true}>
                    </TextInput>

                <View style={styles.row}>
                    <CheckBox style={styles.checkbox} onValueChange={setSelection} value={isSelected} ></CheckBox>
                    <Text style={styles.subText}>Manter Conectado</Text>
                </View>

                <PrimaryButton text={"Avançar"} onPress={() => onPress(email, senha)}></PrimaryButton>

                <TouchableOpacity onPress={() => navigation.navigate('EsqueceuSenha')}>
                    <Text style={Object.assign({},styles.subText, styles.senha)}>Esqueceu a asenha?</Text>
                </TouchableOpacity>
                
                <View style={styles.row}>
                    <View style={styles.linha}></View>
                    <Text style={Object.assign({},styles.subText, {marginHorizontal: 5, color: colors.color1})}>OU</Text>
                    <View style={styles.linha}></View>
                </View>

                <View style={styles.row2}>
                    <Image style={styles.image} source={require("../../assets/images/google.png")}></Image>
                    <Image style={styles.image} source={require("../../assets/images/facebook.png")}></Image>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('CadastroUm')}>
                    <Text style={Object.assign({}, styles.text, {fontSize : RFValue(10, width), alignSelf : 'center'})}>Não possui uma conta? Cadastre-se</Text>
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
    text : {
        color : colors.color1,
        fontSize : RFPercentage(3),
        fontFamily : 'Fredoka-Regular'
    },
    checkbox: {
        border : 1,
    },
    subText : {
        color : colors.color6,
        fontSize : RFPercentage(2),
        fontFamily : 'Fredoka-Regular'
    },
    input : {
        backgroundColor : colors.color4,
        borderRadius : 10,
        paddingHorizontal : 18,
        paddingVertical : 12,
        marginTop : 5,
        marginBottom: 15,
        color: colors.color1,
    },
    inputError : {
        backgroundColor : colors.color4,
        borderRadius : 10,
        paddingHorizontal : 18,
        paddingVertical : 12,
        marginTop : 5,
        marginBottom: 15,
        color: colors.color1,
        borderColor : 'red',
        borderWidth: 1,
    },
    row : {
        alignItems : "center",
        flexDirection: "row",
        marginBottom : 15,
    },
    senha : {
        alignSelf : "flex-end",
        marginTop : 10,
        marginBottom : 15,
    },
    linha : {
        flex : 1,
        backgroundColor : colors.color1,
        height : 1.3,
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
    }
});