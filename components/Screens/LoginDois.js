import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
    } 
from "react-native";

import colors, {currentTheme} from "../Constantes";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function LoginDois({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LOGIN</Text>

            <View style={styles.componentes}>

                <PrimaryButton text={"Avançar como Prestador"} onPress={() => navigation.navigate('PrestadorHome')}></PrimaryButton>
                
                <View style={styles.row}>
                    <View style={styles.linha}></View>
                    <Text style={Object.assign({},styles.subText, {marginHorizontal: 5, color: colors.color1})}>OU</Text>
                    <View style={styles.linha}></View>
                </View>

                <PrimaryButton text={"Avançar como Cliente"} onPress={() => navigation.navigate('ClienteHome')}></PrimaryButton>

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
        flex : 3,
        alignSelf : 'flex-start',
        width : '100%',
    },
    row : {
        alignItems : "center",
        flexDirection: "row",
        marginVertical : 40,
    },
    linha : {
        flex : 1,
        backgroundColor : colors.color1,
        height : 1.3,
    },
});