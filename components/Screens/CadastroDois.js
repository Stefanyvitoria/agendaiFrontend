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
import { HOST } from '@env';


const { width, height, fontScale } = Dimensions.get('window');

export default function CadastroDois({navigation, route}) {

    const [localizacao, setLocalizacao] = useState("");
    const [contato, setContato] = useState("");
    const [dt_nascimento, setDt_nascimento] = useState("");

    const [errorLocalizacao, setErrorLocalizacao] = useState(false);
    const [errorContato, setErrorContato] = useState(false);
    const [errorDt_nascimento, setErrorDt_nascimento] = useState(false);

    function onChangeLocalizacao (value) {
        setErrorLocalizacao(false);
        setLocalizacao(value)
    }

    function onChangeContato (value) {
        setErrorContato(false);
        setContato(value)
    }

    function onChangeDt_nascimento (value) {
        setErrorDt_nascimento(false);
        setDt_nascimento(value);
    }

    async function onPress () {

        if (localizacao == "") {
            setErrorLocalizacao(true);
            return;
        }
        
        if (contato == "") {
            setErrorContato(true);
            return;
        }
        
        if (dt_nascimento == "") {
            setErrorDt_nascimento(true);
            return;
        }

        data = Object.assign({}, 
            route.params,
            {
            localizacao : localizacao,
            contato : contato, 
            dt_nascimento : dt_nascimento,
            tags : []
            }
        );

        
        uri = HOST + 'user';

        await fetch(uri, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        })
        .then((response) => response.json())
        .then((json) => {
            data = json['data'];
            message = json['message'];
        })
        .catch( error => {
            console.log("Error CadastroDois - " + error.message);
        });

        if (message == 'Usuário Criado') {
            navigation.navigate('LoginUm')
        } else {
            alert(message)
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>CADASTRO</Text>

            <View style={styles.componentes}>
            <Text style={styles.text}>Localização</Text>
                <TextInput 
                    style={errorLocalizacao ? styles.inputError: styles.input} 
                    placeholder={"Localização"}
                    onChangeText={(value) => onChangeLocalizacao(value)}
                ></TextInput>

                <Text style={styles.text}>Contato</Text>
                <TextInput 
                    style={errorContato ? styles.inputError: styles.input} 
                    placeholder={"(00) 00000-0000"} 
                    keyboardType="numeric"
                    onChangeText={(value) => onChangeContato(value)}
                ></TextInput>

                <Text style={styles.text}>Data de nascimento</Text>
                <TextInput 
                    style={errorDt_nascimento ? styles.inputError: styles.input} 
                    placeholder={"DD/MM/AAAA"} 
                    onChangeText={(value) => onChangeDt_nascimento(value)}
                ></TextInput>

                <PrimaryButton text={"Avançar"} onPress={() => onPress() }></PrimaryButton>

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