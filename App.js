import { StyleSheet, Text, View } from 'react-native';
import colors from './components/Constantes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './components/Screens/Welcome';
import LoginUm from './components/Screens/LoginUm';
import LoginDois from './components/Screens/LoginDois';
import EsqueceuSenha from './components/Screens/EsqueceuSenha';
import CadastroUm from './components/Screens/CadastroUM';
import CadastroDois from './components/Screens/CadastroDois';
import PrestadorHome from './components/Screens/PrestadorHome';
import ClienteHome from './components/Screens/ClienteHome';
import ConfiguracaoPrestador from './components/Screens/ConfiguracoesPrestador';
import PrestadorEditar from './components/Screens/PrestadorEditar';
import Form01 from './components/Screens/Form01';
import Form02 from './components/Screens/Form02';
import Form03 from './components/Screens/Form03';
import Form04 from './components/Screens/Form04';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false }}/>
                <Stack.Screen name="LoginUm" component={LoginUm} options={{headerShown: false }}/>
                <Stack.Screen name="LoginDois" component={LoginDois} options={{headerShown: false }}/>
                <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} options={{headerShown: false }}/>
                <Stack.Screen name="CadastroUm" component={CadastroUm} options={{headerShown: false }}/>
                <Stack.Screen name="CadastroDois" component={CadastroDois} options={{headerShown: false }}/>
                <Stack.Screen name="PrestadorHome" component={PrestadorHome} options={{headerShown: false }}/>
                <Stack.Screen name="PrestadorConfiguracao" component={ConfiguracaoPrestador} options={{headerShown: false }}/>
                <Stack.Screen name="PrestadorEditar" component={PrestadorEditar} options={{headerShown: false }}/>
                <Stack.Screen name="ClienteHome" component={ClienteHome} options={{headerShown: false }}/>
                <Stack.Screen name="Form01" component={Form01} options={{headerShown: false }}/>
                <Stack.Screen name="Form02" component={Form02} options={{headerShown: false }}/>
                <Stack.Screen name="Form03" component={Form03} options={{headerShown: false }}/>
                <Stack.Screen name="Form04" component={Form04} options={{headerShown: false }}/>
            </Stack.Navigator>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.color1
    },
});