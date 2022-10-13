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

export default function Form01({navigation, route}) {


    var categorias = [];

    cards = [
        {image : require('../../assets/images/Feminino.png'), text : 'Feminina'},
        {image : require('../../assets/images/Masculino.png'), text : 'Masculino'},
        {image : require('../../assets/images/Pedicure.png'), text : 'Pedicure'},
        {image : require('../../assets/images/Manicure.png'), text : 'Manicure'},
        {image : require('../../assets/images/Barba.png'), text : 'Barba'},
        {image : require('../../assets/images/Skin_Care.png'), text : 'Skin Care'},
        {image : require('../../assets/images/Sombrancelha.png'), text : 'Sobrancelha'},
        {image : require('../../assets/images/Spa.png'), text : 'Spa'},
    ];

    return (
        <View style={styles.container}>
            <View style={{backgroundColor: colors.color1, width :'100%'}}>
                <Text style={{color : 'white', padding : 40, fontFamily: "Fredoka-Regular", fontSize : RFPercentage(3), alignSelf : 'center', textAlign :'center'}}>Quais tipos de Categorias de Serviços você gostaria de receber recomendações?</Text>
            </View>

            <FlatList 
                style={{ flex : 1, width : '100%', }}
                numColumns={2}
                data={cards}
                key={(item, index) => index}
                renderItem={ ({item}) => (
                    <TouchableOpacity style={{marginHorizontal : 20, flex : 1, margin : 1, alignItems : 'center', marginVertical : 20}}
                        onPress={()=> {
                            if (!categorias.includes(item.text)) {
                                categorias.push(item.text)
                            }
                        }}>

                        <View onPress={() => {null}}
                            style={{backgroundColor:colors.color1, borderRadius: 15}}>
                            <Image style={{width : width /3.5, height : width /3.5}} source={item.image}></Image>
                        </View>

                        <Text style={{fontSize: RFPercentage(2), fontFamily :"Fredoka-Regular", color:colors.color1}}>{item.text}</Text>
                    </TouchableOpacity>
                )}
                >

            </FlatList>

            <View style={{height : 70, justifyContent: 'center'}}>
                <PrimaryButton text={"Próximo"} width={width - 40} onPress={() => {
                    data = Object.assign({}, route.params, {categorias : categorias});

                    navigation.navigate("Form02", data)
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
});