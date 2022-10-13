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
// import SelectDropdown from 'react-native-select-dropdown'


const { width, height, fontScale } = Dimensions.get('window');

export default function CadastroUm({navigation}) {

    const perfis = ["Prestador", "Cliente"];

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [perfil, setPerfil] = useState("");

    const [errorNome, setErrorNome] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorSenha, setErrorSenha] = useState(false);
    const [errorPerfil, setErrorPerfil] = useState(false);

    function onChangeNome (value) {
        setErrorNome(false);
        setNome(value)
    }

    function onChangeEmail (value) {
        setErrorEmail(false);
        setEmail(value.toLowerCase())
    }

    function onChangeSenha (value) {
        setErrorSenha(false);
        setSenha(value);
    }

    function onChangePerfil (value) {
        setErrorPerfil(false);
        setPerfil(value);
    }

    function onPress () {

        if (nome == "") {
            setErrorNome(true);
            return;
        }
        
        if (email == "") {
            setErrorEmail(true);
            return;
        }
        
        if (senha == "") {
            setErrorSenha(true);
            return;
        }
        
        if (perfil == "") {
            setErrorPerfil(true);
            return;
        }

        data = {
            nome : nome,
            email : email, 
            password : senha,
            perfil : [perfil]
        }

        navigation.navigate('CadastroDois', data)
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>CADASTRO</Text>

            <View style={styles.componentes}>
            <Text style={styles.text}>Nome</Text>
                <TextInput 
                    style={errorNome ? styles.inputError :styles.input} 
                    placeholder={"Your Name"}
                    onChangeText={(value) => onChangeNome(value)}
                ></TextInput>

                <Text style={styles.text}>Email</Text>
                <TextInput 
                    style={errorEmail ? styles.inputError :styles.input} 
                    placeholder={"YourEmail@Agendai.com"} 
                    keyboardType="email-address"
                    onChangeText={(value) => onChangeEmail(value)}
                ></TextInput>

                <Text style={styles.text}>Password</Text>
                <TextInput 
                    style={errorSenha ? styles.inputError :styles.input} 
                    placeholder={"********"} 
                    secureTextEntry={true}
                    onChangeText={(value) => onChangeSenha(value)}
                ></TextInput>

                <SelectDropdown
                    data={perfis}
                    defaultButtonText={"Tipo de Perfil  👆"}
                    buttonStyle={errorPerfil ? styles.inputErrorDropdow :styles.dropdownButton}
                    onSelect={(selectedItem, index) => {
                        onChangePerfil(selectedItem);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />

                <PrimaryButton text={"Avançar"} onPress={() => onPress()}></PrimaryButton>

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
    dropdownButton  : {
        backgroundColor : colors.color4,
        borderRadius : 10,
        width : '100%',
        marginBottom: 25,
        marginTop : 15,
        
    },
    inputErrorDropdow :{
        backgroundColor : colors.color4,
        borderRadius : 10,
        width : '100%',
        marginBottom: 25,
        marginTop : 15,
        borderWidth : 1,
        borderColor : 'red',
    },
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
        color: colors.color1,
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