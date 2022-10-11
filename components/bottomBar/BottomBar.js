import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import colors, {currentTheme} from '../Constantes';
import PrimaryButton from '../Buttons/PrimaryButton';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default function BottomBar({setTabAtual, tabList}) {
    tabList.forEach(element =>{
        element.fontType = 'Fredoka-Regular';
    })

  function onPressTab(tabDestino) {
    tabList.forEach(element =>{
        if (tabDestino == element.name) {
            element.fontType = 'Fredoka-Bold';
            setTabAtual(element.name);
        }else{
            element.fontType ='Fredoka-Regular'
        }
    })
  }

  return (
    <View style={styles.container}>
      {tabList.map(item => {
        return (
          <TouchableOpacity
            style={styles.tab}
            onPress={() => onPressTab(item.name)}>
            <Text
              style={Object.assign({}, styles.text, {fontFamily: item.fontType})}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: RFPercentage(6.5),
    backgroundColor: colors.color1,
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: RFPercentage(2.5),
  },
});
