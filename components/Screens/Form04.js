import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList,
    LogBox
    } 
from "react-native";
import CheckBox from "@react-native-community/checkbox";
import colors, {currentTheme} from "../Constantes";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { HOST } from '@env';

const { width, height, fontScale } = Dimensions.get('window');

async function onPress(data, navigation) {
    uri1 = HOST + 'user/ml/infocliente';
    await fetch(uri1, {
    method: 'POST',
    body: JSON.stringify(
        data
    ),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
        data2 = json['data'];
        message2 = json['message'];
        })
        .catch( error => {
        console.log("Error Form4- " + error.message);
        });
        
        navigation.navigate("ClienteHome", data);
}

export default function Form04({navigation, route}) {

    var [pergunta1, setPergunta1] = useState("");
    var [pergunta2, setPergunta2] = useState("");

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: colors.color1, width :'100%'}}>
                <Text style={{color : 'white', padding : 40, fontFamily: "Fredoka-Regular", fontSize : RFPercentage(3), alignSelf : 'center', textAlign :'center'}}>Nos conte mais sobre você para que possamos proporcionar uma experiência personalizada!</Text>
            </View>

            <View style={{flex : 1, width : '100%', paddingHorizontal : 20, justifyContent : 'center'}}>
                <Text style={styles.text}>Em poucas palavras nos conte qual tipo de serviços estéticos não mencionados anteriormente você teria interesse.</Text>
                <TextInput style={styles.input} 
                        placeholder={"Ex: faço makes artisticas"}
                        onChangeText={(value) => setPergunta1(value)}
                        >
                </TextInput>

                <Text style={styles.text}>Em qual período você costuma consumir/contratar serviços estéticos ?</Text>
                <TextInput style={styles.input} 
                        placeholder={"Ex: de sobrancelhas e cabelo"}
                        onChangeText={(value) => setPergunta2(value)}
                        >
                </TextInput>
            </View>

            <View style={{height : 70, justifyContent: 'center'}}>
                <PrimaryButton text={"Próximo"} width={width - 40} onPress={() => {
                    data = Object.assign({}, route.params, {interesse :  pergunta1 , periodo: pergunta2});
                    onPress(data, navigation);
                }}></PrimaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: "flex-start",
        alignItems : 'center',
    },
    title : {
        flex : 1,
        fontSize : RFPercentage(5),
        color : colors.color1,
        alignSelf : 'flex-start',
        fontFamily : 'Fredoka-Medium',
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
        fontSize : RFPercentage(2.5),
        fontFamily : 'Fredoka-Regular'
    },
});