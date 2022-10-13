import React, { useState } from "react";
import {
    StyleSheet, 
    View,
    Image,
    ImageBackground,
    SafeAreaView,
    Text, 
    StatusBar,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    FlatList
    }
from "react-native";
import colors, {currentTheme} from "../Constantes";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import BottomBar from "../bottomBar/BottomBar";
import CardRelatorio from "../cardRelatorio/cardRelatorio"
import { Calendar } from 'react-native-calendario';

const { width, height, fontScale } = Dimensions.get('window');

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

function body (navigation,tabAtual, ano, setAno, mes, setMes, dia, setDia) {

    const uri = 'https://img.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_1303-20932.jpg?w=2000'; // Recuperar do banco de dados

    if (tabAtual == 'Perfil') {
        return (
            <View style={styles.container}>
                <View style={styles.containerPerfil}>
                        <ImageBackground style={styles.containerPerfilTop} resizeMode="cover" imageStyle={{opacity: 0.6}} source={{
                            uri: uri,}}>
                                <View style={styles.row}>
                                    <TouchableOpacity onPress={() => navigation.navigate("PrestadorConfiguracao")} style={{flex: 1, alignItems: 'center', paddingTop: 20}}>
                                        <Image style={{width: 30, height: 30}} source={require('../../assets/images/configuração.png')}></Image>
                                    </TouchableOpacity>

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

        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        const diasSemana = ['D','S', 'T', 'Q', 'Q', 'S', 'S'];
        const dias = getDiasMes(mes, ano);
        dataCalendario = new Date(ano, mes-1,'01');
        cards = [
            {nome: 'Nome Serviço 1', horario: "09:00", cliente: "digo", status: 'Confirmado'}, 
            {nome: 'Nome Serviço 2', horario: "09:50", cliente: "neto", status: 'A confirmar'}
        ];

        if (dataCalendario.getDay() == 1 ) {
            dias.unshift(0);
        } else if (dataCalendario.getDay() == 2 ) {
            dias.unshift(0);
            dias.unshift(0);
        } else if (dataCalendario.getDay() == 3 ) {
            dias.unshift(0);
            dias.unshift(0);
            dias.unshift(0);
        } else if (dataCalendario.getDay() == 4 ) {
            dias.unshift(0);
            dias.unshift(0);
            dias.unshift(0);
            dias.unshift(0);
        } else if (dataCalendario.getDay() == 5 ) {
            dias.unshift(0);
            dias.unshift(0);
            dias.unshift(0);
            dias.unshift(0);
            dias.unshift(0);
        } else if (dataCalendario.getDay() == 6 ) {
            dias.unshift(0);
            dias.unshift(0);
            dias.unshift(0);
            dias.unshift(0);
            dias.unshift(0);
            dias.unshift(0);
        }

        return (
            <View style={styles.containerperfil}>

                 <View style={styles.bottomTab}>
                     <Text style={styles.textPerfil}>{ano} ⇵</Text>
                     <ScrollView style={{width:'100%', }} horizontal>
                        {meses.map((item, index )=> {
                                return (
                                <TouchableOpacity
                                    onPress={()=> {setMes(index+1)}}
                                    key={index}>
                                    <Text style={[styles.textPerfil, {fontFamily: index+1 == mes? "Fredoka-Bold" : "Fredoka-Regular"}]}>{item}</Text>
                                </TouchableOpacity>
                                );
                        })}
                     </ScrollView>
                 </View>

                <ScrollView style={{backgroundColor: 'white', width: width, flex: 1}}>

                    <View style={{flexDirection : 'row', alignItems: "center", justifyContent: "space-evenly", marginTop : 10, paddingHorizontal:20}}>
                        <TouchableOpacity style={{backgroundColor: colors.color4, padding: 10, borderRadius :10, flex : 1, alignItems:"center", marginRight : 15, }}>
                            <Text style={{color: colors.color1, fontFamily : 'Fredoka-Regular'}}>Adicionar horário</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: colors.color4, padding: 10, borderRadius :10, flex : 1, alignItems:"center", marginLeft : 15, }}>
                            <Text style={{color: colors.color1, fontFamily : 'Fredoka-Regular'}}>Consultar horário</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{backgroundColor: colors.color1, flex : 1, margin : 15, borderRadius: 15, }}>
                        {/* // Row com dias da semana   */}
                        <View style={{flexDirection : 'row', alignItems: "center",  marginVertical : 10}}>

                        {diasSemana.map((item, index )=> {
                                return (
                                <View key={index} style={{margin : 1, width: (width-40)/7, alignItems : 'center'}}>
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
                            renderItem={ ({item}) => (
                                item == 0 ?
                                <View style={{marginVertical : 10,backgroundColor : colors.color1, width: (width-40)/7, margin : 1, alignItems : 'center'}}>
                                </View>

                                :<TouchableOpacity onPress={() => {
                                        setDia(item);
                                    }}
                                    style={{marginVertical : 10,backgroundColor : colors.color1, width: (width-40)/7, margin : 1, alignItems : 'center', backgroundColor: item == dia ? colors.color6: colors.color1, borderRadius: item == dia ? 15: 0}}>
                                    <Text style={{fontSize: RFPercentage(2), fontFamily : item == dia ? "Fredoka-Bold" : "Fredoka-Regular"}}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                    <View style={{backgroundColor: 'white', width: width, flex: 1, marginBottom : 10}}>
                        <Text style={{color: colors.color6, fontFamily :"Fredoka-Bold", fontSize:RFPercentage(3), alignSelf: 'center'}}>Agendamentos - {dia}/{mes}/{ano}</Text>
                    </View>

                    {cards.map((item, index) => {
                        return (
                            <TouchableOpacity  key={index} style={{backgroundColor : colors.color1, marginHorizontal : 20, marginVertical : 5,
                            paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10}}>
                                <Text style={{color: 'white', fontFamily :"Fredoka-Bold", fontSize:RFPercentage(3)}}>{item.nome}</Text>
                                
                                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                    <View>
                                        <Text style={{fontFamily: 'Fredoka-Regular', fontSize: RFPercentage(2.5)}}>{item.cliente}</Text>
                                        <Text style={{fontFamily: 'Fredoka-Regular', fontSize: RFPercentage(2.5), color : item.status == 'Confirmado' ? 'green' : item.status == 'A confirmar'? colors.color3 :'white'}}>{item.status}</Text>
                                    </View>
                                    <Text style={{fontFamily: 'Fredoka-Bold', fontSize: RFPercentage(3)}}>{item.horario}</Text>
                                </View>
                                
                            </TouchableOpacity>
                        );
                    })}

                </ScrollView>
             </View>
          );

      } else if (tabAtual == 'Historico') {

        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        atendimentos = [
            {semana :"semana 01", 
            servicos: [
                {nome: 'Nome Serviço 1', horario: "09:00", cliente: "digo", status: 'Confirmado'},
                {nome: 'Nome Serviço 2', horario: "09:50", cliente: "neto", status: 'A confirmar'}
            ]},
            {semana :"semana 02", 
            servicos: [
                {nome: 'Nome Serviço 1', horario: "09:00", cliente: "digo", status: 'Confirmado'},
                {nome: 'Nome Serviço 2', horario: "09:50", cliente: "neto", status: 'A confirmar'}
            ]}
            
        ];

          return (
            <View style={{justifyContent :'flex-start'}}>
                <View style={styles.bottomTab}>
                    <ScrollView style={{width:'100%', marginTop: 35}} horizontal>
                    {meses.map((item, index )=> {
                            return (
                            <TouchableOpacity
                                onPress={()=> {setMes(index+1)}}
                                key={index}>
                                <Text style={[styles.textPerfil, {fontFamily: index+1 == mes? "Fredoka-Bold" : "Fredoka-Regular"}]}>{item}</Text>
                            </TouchableOpacity>
                            );
                    })}
                    </ScrollView>
                 </View>

                <View>
                {atendimentos.map((item, index) => {
                    return (
                        <View style={{backgroundColor : colors.color4, alignItems: 'center', marginBottom: 2}}>
                            <Text style={{fontFamily:"Fredoka-Bold", fontSize: RFPercentage(3), color: colors.color1, marginBottom : 5}}>{item.semana}</Text>

                            {item.servicos.map((item2, index2) => {
                                return (
                                    <TouchableOpacity  key={index2} style={{backgroundColor : colors.color1, marginHorizontal : 20, marginVertical : 5, paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10, width : '90%'}}>
                                        <Text style={{color: 'white', fontFamily :"Fredoka-Bold", fontSize:RFPercentage(3)}}>{item2.nome}</Text>
                                        
                                        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                            <View>
                                                <Text style={{fontFamily: 'Fredoka-Regular', fontSize: RFPercentage(2.5)}}>{item2.cliente}</Text>
                                                <Text style={{fontFamily: 'Fredoka-Regular', fontSize: RFPercentage(2.5), color : item2.status == 'Confirmado' ? 'green' : item2.status == 'A confirmar'? colors.color3 :'white'}}>{item2.status}</Text>
                                            </View>
                                            <Text style={{fontFamily: 'Fredoka-Bold', fontSize: RFPercentage(3)}}>{item2.horario}</Text>
                                        </View>
                                        
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                        
                    );
                })}
                </View>

             </View>
          );

      } else {
        return (
            <View style={{flex: 1}}>
                <View style={styles.containerRelatorio}>
                    <Text style={styles.tituloRelatorios}>Relatorios Mensais</Text>
                </View>
                <Text style={{marginLeft: width*0.45, marginTop: 15,color: colors.color1, fontFamily: 'Fredoka-Bold', fontSize:RFPercentage(3)}}>2022</Text>

                <View >
                    <CardRelatorio mesCortado='JAN' mes='Janeiro'>
                    </CardRelatorio>
                    <CardRelatorio mesCortado='FEV' mes='Fevereiro'>
                    </CardRelatorio>
                    <CardRelatorio mesCortado='MAR' mes='Março'>
                    </CardRelatorio>
                    <CardRelatorio mesCortado='ABR' mes='Abril'>
                    </CardRelatorio>
                </View>
            </View>
          );
      }
};
  

export default function PrestadorHome({navigation, route}) {
    // Perfil vars
    const [data, setData] = useState(new Date());
    const [ano, setAno] = useState(data.getFullYear());
    const [mes, setMes] = useState(data.getMonth() +1);
    const [dia, setDia] = useState(data.toString().split(' ')[2]);
    
    //BottomTap vars
    const [tabAtual, setTabAtual]= useState('Perfil');
    const tabList = [{name:'Perfil'},{name:'Agenda'},{name:'Historico'},{name:'Relatorio'}];

    return (
        <View style={styles.main}>
            {body(navigation,tabAtual, ano, setAno, mes, setMes, dia, setDia)}
            <BottomBar setTabAtual={setTabAtual} tabList={tabList}></BottomBar>
        </View>
    );
}

const styles = StyleSheet.create({
    textPerfil : {
        color : 'white',
        fontFamily :'Fredoka-Regular',
        fontSize: RFPercentage(3),
        paddingHorizontal : 10,
        paddingTop : 10,
    },
    bottomTab : {
        height : RFPercentage(10),
        width : '100%',
        backgroundColor: colors.color1,
        alignItems : 'flex-end'
    },
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
    containerperfil : {
        flex : 1,
        justifyContent: "flex-start",
        alignItems : 'center',
    },
    containerRelatorio : {
        backgroundColor : colors.color1,
        alignItems : 'center'
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
    },
    containerRelatorioTop : {
        flex: 1,
        backgroundColor: colors.color1,
        width: '100%',
        height: '10%'
    },
    tituloRelatorios : {
        marginVertical: 20,
        color: colors.color5,
        fontFamily: 'Fredoka-Bold',
        fontSize:RFPercentage(3)
    },
});