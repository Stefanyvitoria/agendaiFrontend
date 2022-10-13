import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Text, TouchableOpacity} from 'react-native';
import colors, {currentTheme} from '../Constantes';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const { width, height, fontScale } = Dimensions.get('window');

export default function CardRelatorio({mesCortado, mes}) {
  return (
    <TouchableOpacity style={styles.containerRelatorio}>
      <View style={styles.CircleShape}>
        <Text style={styles.mesCard}>{mesCortado}</Text>
      </View>
      <View style={{flexDirection : 'column'}}>
      <Text style={styles.textoRelatorios}>
            Relatorios de {mes}
        </Text>
        <Text style = {styles.cliqueParaVer}>
        Clique para obter os relatórios {'\n'}
        detalhados
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    CircleShape: {
        
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: colors.color4,
        marginLeft: width * 0.03
      },
      containerRelatorio : {
        backgroundColor: colors.color7,
        marginTop: height*0.03,
        width: width,
        height: height*0.12,
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    row : {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
   mesCard : {
        flex: 1,
        alignSelf: 'center',
        marginTop: height*0.04,
        color: colors.color1,
        fontFamily: 'Fredoka-Bold',
        fontSize:RFPercentage(3)
    },
    textoRelatorios : {
        marginLeft: width*0.06,
        marginTop: height*0.015,
        color: colors.color1,
        fontFamily: 'Fredoka-Regular',
        fontSize:RFPercentage(2.4)
    },
    cliqueParaVer : {
        marginLeft: width*0.06,
        marginTop: height*0.01,
        color: 'green',
        fontFamily: 'Fredoka-Regular',
        fontSize:RFPercentage(2)
    }

});
