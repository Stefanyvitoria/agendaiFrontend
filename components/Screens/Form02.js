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

export default function Form02({navigation, route}) {


    var [pergunta1, setPergunta1] = useState("");
    var [pergunta2, setPergunta2] = useState("");
    var [pergunta3, setPergunta3] = useState("");

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: colors.color1, width :'100%'}}>
                <Text style={{color : 'white', padding : 40, fontFamily: "Fredoka-Regular", fontSize : RFPercentage(3), alignSelf : 'center', textAlign :'center'}}>Sobre Você</Text>
            </View>

            <View style={{flex : 1, width : '100%', paddingHorizontal : 20, justifyContent : 'center'}}>
                <Text style={styles.text}>Qual o seu tipo de Cabelo?</Text>
                <TextInput style={styles.input} 
                        placeholder={"Ex: cacheado, comprido e de cor preto"}
                        onChangeText={(value) => setPergunta1(value)}
                        >
                </TextInput>

                <Text style={styles.text}>Qual a curvatura?</Text>
                <TextInput style={styles.input} 
                        placeholder={"Ex: 3B, 2C"}
                        onChangeText={(value) => setPergunta2(value)}
                        >
                </TextInput>

                <Text style={styles.text}>Você ultiliza produtos quimicos?</Text>
                <TextInput style={styles.input} 
                        placeholder={"Ex: Progressivas"}
                        onChangeText={(value) => setPergunta3(value)}
                        >
                </TextInput>
            </View>

            <View style={{height : 70, justifyContent: 'center'}}>
                <PrimaryButton text={"Próximo"} width={width - 40} onPress={() => {
                    data = Object.assign({}, route.params, {cabelo : [pergunta1, pergunta2, pergunta3]});
                    navigation.navigate("Form03", data)
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