import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import BottomBar from '../bottomBar/BottomBar';
import {RFPercentage} from 'react-native-responsive-fontsize';
import PrimaryButton from '../Buttons/PrimaryButton';

export default function ClienteHome({navigation, route}) {
  const [tabAtual, setTabAtual] = useState('Início');
  const tabList = [
    {name: 'Início'},
    {name: 'Busca'},
    {name: 'Agenda'},
    {name: 'Perfil'},
  ];

  return (
    <View style={styles.main}>
      {body(tabAtual)}
      <BottomBar setTabAtual={setTabAtual} tabList={tabList} />
    </View>
  );
}
function body(tabAtual) {
    var [searchCategorySelect, setSearchCategorySelect] = useState(true);
  const uri =
    'https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_1303-20932.jpg?w=2000'; // Recuperar do banco de dados

  if (tabAtual == 'Início') {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity>
            <Image
              onPress={null}
              style={styles.configButton}
              source={require('../../assets/images/configuração.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.categoriesView}>
          <FlatList
            data={Categorias}
            horizontal
            key={item => item.nome}
            renderItem={({item}) => (
              <View style={styles.categoryContainer}>
                <TouchableOpacity onPress={null}>
                  <Image style={styles.image} source={{uri: uri}} />
                  <Text style={styles.categoryName}>{item.nome}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <Text style={styles.sectionTitle}>Promoções para você</Text>
        <View style={styles.cupomsView}>
          <FlatList
            data={Categorias}
            horizontal
            key={item => item.nome}
            renderItem={({item}) => (
              <View style={styles.cupomContainer}>
                <TouchableOpacity onPress={null}>
                  <Image style={styles.imageBanner} source={{uri: uri}} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <Text style={styles.sectionTitle}>Estabelecimentos recomendados</Text>
        <View style={styles.servicesView}>
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
                    <Text style={styles.serviceText}>{item.nome}</Text>
                    <Text style={styles.serviceText}>Rate: {item.rate}</Text>
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
  } else if (tabAtual == 'Busca') {
    var searchValue;
   
    return (
      <View style={styles.container}>
        <View style={styles.searchBar} onPress={null}>
            {!searchCategorySelect ? (<Text style={{fontSize: 50, color: '#E5E5E5', paddingRight: 5}} onPress={() => setSearchCategorySelect(!searchCategorySelect)}>{'<'}</Text>):
            (
                null
            )}
            
          <TextInput
            style={styles.input}
            onChangeText={null}
            value={searchValue}
            placeholder="Pesquisar"
            keyboardType="ascii-capable"
          />
        </View>
        {searchCategorySelect ? (
          <View style={{width: '100%', paddingBottom: 440}}>
            <Text style={styles.searchCategoryText}>Categorias</Text>
            <View>
              <FlatList
                data={Categorias}
                key={item => item.nome}
                renderItem={({item}) => (
                  <View style={styles.categoryContainer}>
                    <TouchableOpacity
                      onPress={() => setSearchCategorySelect(!searchCategorySelect)}
                      style={{
                        backgroundColor: '#336699',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        padding: 10,
                        margin: 5,
                        borderRadius: 15,
                      }}>
                      <Image style={styles.image} source={{uri: uri}} />
                      <Text
                        style={{
                          alignSelf: 'center',
                          color: '#E5E5E5',
                          paddingLeft: 30,
                          fontFamily: 'Fredoka',
                          fontSize: 24,
                          fontWeight: '800',
                          lineHeight: 24,
                        }}>
                        {item.nome}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          </View>
        ) : (
          <View style={{paddingTop: 100, paddingBottom: 40}}>
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
                    <Text style={styles.serviceText}>{item.nome}</Text>
                    <Text style={styles.serviceText}>Rate: {item.rate}</Text>
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
        )}
      </View>
    );
  } else if (tabAtual == 'Agenda') {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Agenda</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={null} style={styles.profileEditButton}>
            <Image source={require('../../assets/images/editar.png')} />
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
            <Text style={styles.profileName}>User</Text>
          </View>
        </View>
        <ScrollView
          style={{
            flex: 2,
            width: '100%',
            padding: 5,
            overflow: 'hidden',
            marginBottom: RFPercentage(6.5),
          }}>
          <View
            style={{
              height: '100%',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <PrimaryButton
              width={'90%'}
              text="Configurações"
              onPress={() => {
                null;
              }}
            />
            <PrimaryButton
              width={'90%'}
              text="Histórico de Agendamentos"
              onPress={() => {
                null;
              }}
            />
            <PrimaryButton
              width={'90%'}
              text="Favoritos"
              onPress={() => {
                null;
              }}
            />
            <PrimaryButton
              width={'90%'}
              text="Desconectar"
              onPress={() => {
                null;
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#2f4858',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: '#2f4858',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  image: {
    borderRadius: 15,
    overflow: 'hidden',
    width: 100,
    height: 100,
  },
  imageBanner: {
    borderRadius: 15,
    overflow: 'hidden',
    width: 200,
    height: 100,
  },
  sectionTitle: {
    width: '100%',
    paddingTop: 5,
    paddingLeft: 10,
    fontFamily: 'Fredoka',
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 24,
    color: '#336699',
  },
  searchCategoryText: {
    width: '100%',
    paddingTop: 240,
    paddingBottom: 10,
    paddingLeft: 10,
    fontFamily: 'Fredoka',
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 24,
    color: '#336699',
  },
  configButton: {
    marginRight: 10,
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
  serviceText: {padding: 5, color: '#336699'},
  categoriesView: {flex: 2, paddingTop: 55},
  categoryName: {alignSelf: 'center', color: '#336699'},
  categoryContainer: {marginHorizontal: 10},
  cupomsView: {flex: 2, width: '100%'},
  cupomContainer: {marginHorizontal: 10, alignSelf: 'center'},
  favImage: {marginRight: 10},
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
  profileEditButton: {
    margin: 10,
    alignSelf: 'flex-end',
  },
  profileContainer: {
    backgroundColor: '#2F4858',
    width: '100%',
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileOption: {
    borderRadius: 15,
    backgroundColor: '#336699',
    width: '90%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    width: '80%',
    height: 56,
    borderRadius: 15,
    position: 'relative',
    backgroundColor: 'white',
    padding: 15,
  },
  searchResult: {
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: 200
  },
});

const Categorias = [
  {nome: 'Barba', rate: 5, desc: 'R$10,00', fav: true},
  {nome: 'Feminino', rate: 5, desc: 'R$10,00', fav: false},
  {nome: 'Masculino', rate: 5, desc: 'R$10,00', fav: false},
  {nome: 'Unha', rate: 5, desc: 'R$10,00', fav: false},
  {nome: 'Pele', rate: 5, desc: 'R$10,00', fav: false},
];
