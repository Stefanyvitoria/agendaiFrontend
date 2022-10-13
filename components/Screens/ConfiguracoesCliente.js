import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import BottomBar from '../bottomBar/BottomBar';
import {RFPercentage} from 'react-native-responsive-fontsize';
import PrimaryButton from "../Buttons/PrimaryButton";
import colors from '../Constantes';

export default function ConfiguracaoCliente({navigation, route}) {

  return (
    <View style={styles.main}>
      <View style={{backgroundColor : colors.color1, height: 50, width : '100%'}}></View>
      
      <View style={{width : '90%', paddingTop:20}}>
        <TouchableOpacity>
            <Text style={{color: colors.color1, fontFamily: "Fredoka-Bold", fontSize: RFPercentage(3), paddingVertical: 15}}>Gerenciar Notificações</Text>
            <View style={{backgroundColor : colors.color1, height: 1, width : '100%'}}></View>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{color: colors.color1, fontFamily: "Fredoka-Bold", fontSize: RFPercentage(3), paddingVertical: 15}}>Sobre o Aplicativo</Text>
            <View style={{backgroundColor : colors.color1, height: 1, width : '100%'}}></View>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{color: colors.color1, fontFamily: "Fredoka-Bold", fontSize: RFPercentage(3), paddingVertical: 15}}>Limpar Histórico</Text>
            <View style={{backgroundColor : colors.color1, height: 1, width : '100%'}}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>navigation.navigate("LoginUm")}>
            <Text style={{color: colors.color1, fontFamily: "Fredoka-Bold", fontSize: RFPercentage(3), paddingVertical: 15}}>Desconectar</Text>
            <View style={{backgroundColor : colors.color1, height: 1, width : '100%'}}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
