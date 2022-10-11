import React, { useState } from "react";
import {
    StyleSheet, 
    View,
    Image,
    ImageBackground,
    Text, 
    StatusBar,
    Dimensions,
    ScrollView
    }
from "react-native";
import colors, {currentTheme} from "../Constantes";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import BottomBar from "../bottomBar/BottomBar";


const { width, height, fontScale } = Dimensions.get('window');


function body (tabAtual) {

    const uri = 'https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_1303-20932.jpg?w=2000'; // Recuperar do banco de dados

    if (tabAtual == 'Perfil') {
        return (
            <View style={styles.container}>
                <View style={styles.containerPerfil}>
                        <ImageBackground style={styles.containerPerfilTop} resizeMode="cover" imageStyle={{opacity: 0.6}} source={{
                            uri: uri,}}>
                                <View style={styles.row}>
                                    <View style={{flex: 1, alignItems: 'center', paddingTop: 20}}>
                                        <Image style={{width: 30, height: 30}} source={require('../../assets/images/configuração.png')}></Image>
                                    </View>

                                    <View style={{alignItems: 'center', justifyContent: 'center',color: 'black', flex : 2, height: '100%', width : '100%'}}>
                                        <Image style={{borderRadius: 50,width: 100, height: 100}} source={{uri :uri}}></Image>
                                        <Text style={{color: 'white',marginTop: 10, fontSize: RFPercentage(3.5), fontFamily: 'Fredoka-Bold'}}>Perfil</Text>
                                    </View>

                                    <View style={{flex: 1, alignItems: 'center', paddingTop: 20}}>
                                        <Image style={{width: 30, height: 30}} source={require('../../assets/images/editar.png')}></Image>
                                    </View>

                                </View>
                        </ImageBackground>

                        <View style={styles.containerPerfilBottom}>

                            <View style={{backgroundColor: colors.color4, flex: 1, borderRadius: 20, marginHorizontal : 20, marginVertical : 15, justifyContent: 'center', alignItems : 'center'}}>
                                <Text style={{color: colors.color6, fontFamily: 'Fredoka-Regular', fontSize:RFPercentage(2)}}>Description</Text>
                            </View>

                            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Image key={index}  style={{width: 20, height: 20}} source={require('../../assets/images/estrela.png')}></Image>
                                ))}
                                    
                                </View>

                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image style={{width: 11, height: 15, marginRight : 10}} source={require('../../assets/images/local.png')}></Image>
                                    <Text style={{color:colors.color6}}>Endereço</Text>
                                </View>
                            </View>
                        </View>
                </View>

                <View style={styles.containerServicos}>
                    <ScrollView style={{flex : 1, width : '100%'}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex: 2, alignItems: 'flex-end',}}>
                                <Text style={{paddingVertical : 10, color: colors.color1, fontFamily :'Fredoka-Bold', fontSize :RFPercentage(4)}}>Serviços</Text>
                            </View>

                            <View style={{flex: 1, alignItems: 'flex-end', paddingTop: 20, paddingRight : 20}}>
                                <Image style={{width: 30, height: 30}} source={require('../../assets/images/editar.png')}></Image>
                            </View>
                        </View>

                        {Array.from({ length: 7 }).map((_, index) => (

                            <View key={index} style={{flexDirection: 'row',backgroundColor: colors.color4, flex: 1, borderRadius: 20, marginHorizontal : 20, marginVertical : 10, justifyContent: 'center', alignItems : 'center', paddingVertical: 10, paddingHorizontal : 20}}>

                                <View style={{flex : 1}}>
                                    <Image style={{borderRadius: 15,width: 60, height: 60, }} source={{uri :uri}}></Image>
                                </View>

                                <View style={{flex:3.5}}>
                                    <Text style={{color: colors.color6, fontFamily: 'Fredoka-Bold', fontSize:RFPercentage(2.4)}}>Serviço</Text>
                                    
                                    <View style={{flexDirection: 'row', flex : 1, justifyContent: 'space-between'}}>
                                        <Text style={{color: colors.color6, fontFamily: 'Fredoka-Regular', fontSize:RFPercentage(2)}}>Description</Text>

                                        <Text style={{color: colors.color6, fontFamily: 'Fredoka-Regular', fontSize:RFPercentage(2)}}>R$ 00,00</Text>
                                    </View>
                                </View>

                            </View>

                        ))}

                    </ScrollView>

                </View>
            </View>
        );

      } else if (tabAtual == 'Agenda') {
          return (
            <View style={styles.container}>
                 <Text style={styles.text}>Agenda</Text>
             </View>
          );

      } else if (tabAtual == 'Historico') {
          return (
            <View style={styles.container}>
                     <Text style={styles.text}>Historico</Text>

             </View>
          );

      } else {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Relatorio</Text>

             </View>
          );
          return 
      }
};
  

export default function PrestadorHome({navigation}) {

    const [tabAtual, setTabAtual]= useState('Perfil');
    const tabList = [{name:'Perfil'},{name:'Agenda'},{name:'Historico'},{name:'Relatorio'}];

    return (
        <View style={styles.main}>
            {body(tabAtual)}
            <BottomBar setTabAtual={setTabAtual} tabList={tabList}></BottomBar>
        </View>
    );
}

const styles = StyleSheet.create({
    row : {
        flexDirection : 'row',
        flex: 1,
    },
    cel: {
        flex : 1,
    },
    main : {
        flex : 1,
    },
    container : {
        flex : 1,
        justifyContent: "center",
        alignItems : 'center',
    },
    
    text : {
        color : 'black',
        fontSize: 30,

    },
    containerPerfil : {
        flex : 4.5,
        backgroundColor : 'white',
        width : '100%',

    },
    containerServicos : {
        flex : 5.5,
        width : '100%',
        alignItems : 'center',
    },
    containerPerfilBottom : {
        flex : 1,
        
    },
    containerPerfilTop : {
        flex : 1,
    }
});
