import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import colors, {currentTheme} from '../Constantes';
import PrimaryButton from '../Buttons/PrimaryButton';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import BottomBar from '../bottomBar/BottomBar';
import CardRelatorio from '../cardRelatorio/cardRelatorio';
import {Calendar} from 'react-native-calendario';
import { HOST } from '@env';

const { width, height, fontScale } = Dimensions.get('window');

export default function PrestadorHome({navigation,route}) {

    
  async function changeInfo(name, description, location, category,phone, startDate, route) {
    uri = HOST + 'user/ml/infoprestador';

    await fetch(uri, {
      method: 'POST',
      body: JSON.stringify({
        email: route.params['email'],
        categorias: category.split(','),
        descricao:description
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        data = json['data'];
        message = json['message'];
      })
      .catch(error => {
        console.log('Error PrestadorEditar - ' + error.message);
      });
    
    alert('Atualizado!');
    navigation.goBack();
  }

  function body() {
    var serviceName= '';
    var serviceDescription ='';
    var serviceLocation ='';
    var serviceCategory ='';
    var servicePhone ='';
    var serviceStartDate = '';
    return (
      <View>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.profileEditButton}>
            <Image source={require('../../assets/images/icon-return.png')} />
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={styles.profileImage}
              resizeMode={'cover'}
              source={require('../../assets/images/default_profile.png')}
            />
            <Text style={styles.profileName}>Enterprise</Text>
          </View>
        </View>
        <ScrollView style={{height: height - 250}}>
          <View
            style={{alignItems: 'center', width: '100%', paddingBottom: 20}}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={styles.fieldTitle}>Nome</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => serviceName = value}
                placeholder="Digite aqui..."
                keyboardType="ascii-capable"
              />
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={styles.fieldTitle}>Descrição</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => serviceDescription = value}
                placeholder="Digite aqui..."
                keyboardType="ascii-capable"
                multiline={true}
                numberOfLines={6}
              />
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={styles.fieldTitle}>Localização</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => serviceLocation = value}
                placeholder="Digite aqui..."
                keyboardType="ascii-capable"
              />
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={styles.fieldTitle}>Categorias</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => serviceCategory = value}
                placeholder="Digite aqui..."
                keyboardType="ascii-capable"
              />
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={styles.fieldTitle}>Contato</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => servicePhone = value}
                placeholder="Digite aqui..."
                keyboardType="ascii-capable"
              />
            </View>
            <View
              style={{width: '100%', alignItems: 'center', paddingBottom: 20}}>
              <Text style={styles.fieldTitle}>Data de Abertura</Text>
              <TextInput
                style={styles.input}
                onChangeText={(value) => serviceStartDate = value}
                placeholder="Digite aqui..."
                keyboardType="ascii-capable"
              />
            </View>
            <PrimaryButton
              text={'Alterar'}
              width={'90%'}
              onPress={() =>
                changeInfo(
                  serviceName,
                  serviceDescription,
                  serviceLocation,
                  serviceCategory,
                  servicePhone,
                  serviceStartDate,
                  route
                )
              }
            />
          </View>
        </ScrollView>
      </View>
    );
  }
  return <View style={styles.main}>{body()}</View>;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  profileContainer: {
    backgroundColor: '#2F4858',
    width: '100%',
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileEditButton: {
    marginLeft: 10,
    paddingLeft: 10,
    alignSelf: 'flex-start',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 75,
    backgroundColor: '#E5E5E5',
  },
  profileName: {
    paddingTop: 10,
    color: '#E5E5E5',
    fontSize: 20,
  },
  input: {
    backgroundColor: colors.color4,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginTop: 5,
    marginBottom: 15,
    width: '90%',
    color: colors.color1,
  },
  inputDescription: {
    backgroundColor: colors.color4,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginTop: 5,
    marginBottom: 15,
    width: '90%',
    height: 100,
    color: colors.color1,
  },
  fieldTitle: {
    alignSelf: 'flex-start',
    padding: 10,
    paddingBottom: 5,
    paddingLeft: 20,
    color: colors.color2,
    fontSize: 18,
    fontWeight: '800',
  },
});
