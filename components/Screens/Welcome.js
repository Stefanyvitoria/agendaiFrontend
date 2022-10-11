import React from "react";
import {
    StyleSheet, 
    View, 
    Image, 
    useWindowDimensions, 
    ImageBackground, 
    Text, 
    StatusBar,
    Dimensions
    } 
from "react-native";
import colors, {currentTheme} from "../Constantes";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const { width, height, fontScale } = Dimensions.get('window');

export default function WelcomeScreen({navigation}) {    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.color1} barStyle={currentTheme == 'dark'? 'light-content' : 'dark-content'} />
        
            <ImageBackground 
                style={styles.imageBackground} 
                source={require('../../assets/images/BG.png')}>
                    
                <Image style={styles.logo} source={require('../../assets/images/AgendAi_Logo.png')} />

            </ImageBackground>

            <View style={styles.card}>

                <View style={styles.texts} >
                    <Text style= {styles.title}>Bem vindo ao AgendAí!</Text>
                    <Text style= {styles.subtitle}>Seu aplicativo de agendamentos.</Text>
                    <Text style={styles.text}>Aqui você pode consultar os serviços estéticos próximos à você e realizar agendamentos.</Text>
                </View>

                <View style={styles.button}>
                    <PrimaryButton text={'Comece agora mesmo!'} marginHorizontal={10} onPress={() => navigation.navigate("LoginUm")} />
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: colors.color1,
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center',
        alignItems: "center",
        marginHorizontal : 15,
    },
    logo: {
        width : '80%',
        height : '20%',
    },
    card : {
        flex : 1,
        backgroundColor : 'white',
        paddingTop : 50,
        paddingHorizontal: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width : '100%',
    },
    title : {
        color : colors.color1,
        fontSize : RFPercentage(4.4),
        fontFamily: 'Fredoka-Bold',
    },
    subtitle : {
        fontSize : RFPercentage(3),
        color : colors.color1,
        marginVertical : 25,
        fontFamily: 'Fredoka-SemiBold',
    },
    text : {
        fontSize: RFPercentage(2),
        color : colors.color1,
        fontFamily: 'Fredoka-Medium',
    },
    texts : {
        flex: 3,
    },
    button: {
        flex: 2,
    },
});
