import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions
    } 
from "react-native";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import colors, {currentTheme} from "../Constantes";

const { width, height, fontScale } = Dimensions.get('window');

const Categorias = [
    {nome: 'Estabelecimento 1', rate: 5, fav: true},
    {nome: 'Estabelecimento 2', rate: 4.93, fav: true},
    {nome: 'Estabelecimento 3', rate: 4.5, fav: true},
    {nome: 'Estabelecimento 4', rate: 4.9, fav: true},
    {nome: 'Estabelecimento 5', rate: 5, fav: true},
  ];

const uri =
    'https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_1303-20932.jpg?w=2000';

export default function Favoritos({navigation}) {
    return (
        <View style={{flexDirection: 'column', flex: 1}}>
                <View style={styles.containerTitulo}>
                <Text style={styles.tituloFavoritos}>Favoritos</Text>
            </View>
            <View style={{paddingBottom: 40, marginBottom: 70, marginTop: 10}}>
            <FlatList
            data={Categorias}
            key={item => item.nome}
            renderItem={({item}) => (
              <View style={styles.serviceList}>
                <TouchableOpacity
                  onPress={null}
                  style={styles.touchableService}>
                  <Image style={styles.image} source={{uri: uri}} />
                  <View style={styles.serviceInfo}>
                    <Text style={styles.estabName}>{item.nome}</Text>
                    <Text style={styles.serviceText}>Rate: {item.rate} ● Barbearia</Text>
                    <Text style={styles.serviceText}>{item.desc}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0}>
                  {item.fav == true ? (
                    <Image
                      style={styles.favImage}
                      source={require('../../assets/images/coração.png')}
                    />
                  ) : (
                    <Image
                      style={styles.favImage}
                      source={require('../../assets/images/coração_vazio.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )}
          />
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
    containerTitulo : {
        flex: 1,
        backgroundColor: colors.color1,
        width: '100%',
        height: height*0.1
    },
    tituloFavoritos : {
        alignSelf: 'center',
        marginTop: height*0.05,
        color: colors.color5,
        fontFamily: 'Fredoka-Bold',
        fontSize:RFPercentage(3)
    },
    serviceList: {
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      },
      servicesView: {
        flex: 4,
        width: '100%',
        paddingVertical: 10,
      },
      touchableService: {
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
      },
      serviceInfo: {
        alignItems: 'center',
        padding: 10,
        paddingLeft: 70,
      },
      image: {
        borderRadius: 15,
        overflow: 'hidden',
        width: 100,
        height: 100,
      },
      serviceText: {marginRight: 5,padding: 5, color: '#336699', fontFamily : 'Fredoka-Regular'},
      estabName: {marginRight: 5,padding: 5, color: '#336699', fontFamily : 'Fredoka-Regular'},
});