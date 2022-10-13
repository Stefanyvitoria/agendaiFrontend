import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import BottomBar from '../bottomBar/BottomBar';
import {RFPercentage} from 'react-native-responsive-fontsize';
import PrimaryButton from '../Buttons/PrimaryButton';
import colors from '../Constantes';
import {HOST} from '@env';

const {width, height, fontScale} = Dimensions.get('window');

function getDiasMes(month, year) {
  month--;

  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }
  return days;
}

async function get_status(route, navigation) {
  uri1 = HOST + 'cliente';
  await fetch(uri1, {
  method: 'POST',
  body: JSON.stringify(
    route.params
  ),
  headers: {
      'Content-type': 'application/json; charset=UTF-8',
  },
  })
  .then((response) => response.json())
  .then((json) => {
      data1 = json['data'];
      message1 = json['message'];
    })
    .catch( error => {
      console.log("Error LoginUm - " + error.message);
    });
    
    if (message1 == 'Usuário não encontrado') {
      navigation.navigate("Form01", route.params)
    }

  }

export default function ClienteHome({navigation, route}) {
  const [data, setData] = useState(new Date());
  const [ano, setAno] = useState(data.getFullYear());
  const [mes, setMes] = useState(data.getMonth() + 1);
  const [dia, setDia] = useState(data.toString().split(' ')[2]);

  const [tabAtual, setTabAtual] = useState('Início');
  const tabList = [
    {name: 'Início'},
    {name: 'Busca'},
    {name: 'Agenda'},
    {name: 'Perfil'},
  ];

  get_status(route, navigation)
  

  return (
    <View style={styles.main}>
      {body(navigation, tabAtual, ano, setAno, mes, setMes, dia, setDia, route)}
      <BottomBar setTabAtual={setTabAtual} tabList={tabList}></BottomBar>
    </View>
  );
}
function body(
  navigation,
  tabAtual,
  ano,
  setAno,
  mes,
  setMes,
  dia,
  setDia,
  route,
) {
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
          {!searchCategorySelect ? (
            <Text
              style={{fontSize: 50, color: '#E5E5E5', paddingRight: 5}}
              onPress={() => setSearchCategorySelect(!searchCategorySelect)}>
              {'<'}
            </Text>
          ) : null}

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
                      onPress={() =>
                        setSearchCategorySelect(!searchCategorySelect)
                      }
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
    const meses = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const dias = getDiasMes(mes, ano);
    dataCalendario = new Date(ano, mes - 1, '01');
    agendamentos = [
      {
        servicos: [
          {
            nome: 'Estabelecimento 1',
            horario: '8:00 - 08:45',
            valor: 'Preço: R$ xx,xx',
          },
          {
            nome: 'Estabelecimento 2',
            horario: '11:40 - 12:00',
            valor: 'Preço: R$ xx,xx',
          },
        ],
      },
      {
        servicos: [
          {
            nome: 'Estabelecimento 3',
            horario: '09:00 - 09:30',
            valor: 'Preço: R$ xx,xx',
          },
          {
            nome: 'Estabelecimento 1',
            horario: '14:00 - 15:15',
            valor: 'Preço: R$ xx,xx',
          },
        ],
      },
    ];
    if (dataCalendario.getDay() == 1) {
      dias.unshift(0);
    } else if (dataCalendario.getDay() == 2) {
      dias.unshift(0);
      dias.unshift(0);
    } else if (dataCalendario.getDay() == 3) {
      dias.unshift(0);
      dias.unshift(0);
      dias.unshift(0);
    } else if (dataCalendario.getDay() == 4) {
      dias.unshift(0);
      dias.unshift(0);
      dias.unshift(0);
      dias.unshift(0);
    } else if (dataCalendario.getDay() == 5) {
      dias.unshift(0);
      dias.unshift(0);
      dias.unshift(0);
      dias.unshift(0);
      dias.unshift(0);
    } else if (dataCalendario.getDay() == 6) {
      dias.unshift(0);
      dias.unshift(0);
      dias.unshift(0);
      dias.unshift(0);
      dias.unshift(0);
      dias.unshift(0);
    }

    return (
      <View style={styles.agenda}>
        <View style={styles.bottomTab}>
          <Text style={styles.textPerfil}>{ano} ⇵</Text>
          <ScrollView style={{width: '100%'}} horizontal>
            {meses.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setMes(index + 1);
                  }}
                  key={index}>
                  <Text
                    style={[
                      styles.textPerfil,
                      {
                        fontFamily:
                          index + 1 == mes ? 'Fredoka-Bold' : 'Fredoka-Regular',
                      },
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <ScrollView
          style={{backgroundColor: 'white', width: width, flexGrow: 1}}>
          <View
            style={{
              backgroundColor: colors.color1,
              flex: 1,
              margin: 15,
              borderRadius: 15,
            }}>
            {/* // Row com dias da semana   */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              {diasSemana.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      margin: 1,
                      width: (width - 40) / 7,
                      alignItems: 'center',
                    }}>
                    <Text style={styles.textPerfil}>{item}</Text>
                  </View>
                );
              })}
            </View>

            {/* linhas dos dias das semanas */}
            <FlatList
              numColumns={7}
              key={(item, index) => index}
              data={dias}
              renderItem={({item}) =>
                item == 0 ? (
                  <View
                    style={{
                      marginVertical: 10,
                      backgroundColor: colors.color1,
                      width: (width - 40) / 7,
                      margin: 1,
                      alignItems: 'center',
                    }}></View>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setDia(item);
                    }}
                    style={{
                      marginVertical: 10,
                      backgroundColor: colors.color1,
                      width: (width - 40) / 7,
                      margin: 1,
                      alignItems: 'center',
                      backgroundColor: item == dia ? 'green' : colors.color1,
                      borderRadius: item == dia ? 15 : 0,
                    }}>
                    <Text
                      style={{
                        color: colors.color5,
                        fontSize: RFPercentage(2),
                        fontFamily:
                          item == dia ? 'Fredoka-Bold' : 'Fredoka-Regular',
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )
              }
            />
          </View>

          <ScrollView
            style={{
              backgroundColor: colors.color4,
              marginBottom: 2,
              flexGrow: 1,
              height: height * 0.41,
            }}>
            <Text
              style={{
                color: colors.color2,
                fontFamily: 'Fredoka-Bold',
                fontSize: RFPercentage(3),
                alignSelf: 'center',
              }}>
              Agendamentos
            </Text>
            {agendamentos.map((item, index) => {
              return (
                <View
                  style={{
                    backgroundColor: colors.color4,
                    alignItems: 'center',
                    marginBottom: 2,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Fredoka-Bold',
                      fontSize: RFPercentage(3),
                      color: colors.color1,
                      marginBottom: 5,
                    }}>
                    {item.semana}
                  </Text>

                  {item.servicos.map((item2, index2) => {
                    return (
                      <TouchableOpacity
                        key={index2}
                        style={{
                          backgroundColor: colors.color2,
                          marginHorizontal: 20,
                          marginVertical: 5,
                          paddingVertical: 10,
                          paddingHorizontal: 15,
                          borderRadius: 10,
                          width: '90%',
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            fontFamily: 'Fredoka-Bold',
                            fontSize: RFPercentage(2.5),
                          }}>
                          {item2.nome}
                        </Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <View>
                            <Text
                              style={{
                                fontFamily: 'Fredoka-Regular',
                                color: 'white',
                                fontSize: RFPercentage(2),
                              }}>
                              {item2.valor}
                            </Text>
                          </View>
                          <Text
                            style={{
                              color: 'white',
                              fontFamily: 'Fredoka-Bold',
                              fontSize: RFPercentage(3),
                            }}>
                            {item2.horario}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
          </ScrollView>
        </ScrollView>
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
                navigation.navigate('ClienteConfiguracao');
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
                navigation.navigate('Favoritos');
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
    paddingTop: 200,
  },
  textPerfil: {
    color: 'white',
    fontFamily: 'Fredoka-Regular',
    fontSize: RFPercentage(3),
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  bottomTab: {
    height: RFPercentage(10),
    width: '100%',
    backgroundColor: colors.color1,
    alignItems: 'flex-end',
  },
  agenda: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const Categorias = [
  {nome: 'Barba', rate: 5, desc: 'R$10,00', fav: true},
  {nome: 'Feminino', rate: 5, desc: 'R$10,00', fav: false},
  {nome: 'Masculino', rate: 5, desc: 'R$10,00', fav: false},
  {nome: 'Unha', rate: 5, desc: 'R$10,00', fav: false},
  {nome: 'Pele', rate: 5, desc: 'R$10,00', fav: false},
];
