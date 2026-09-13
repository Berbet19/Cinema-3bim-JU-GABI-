import { View, Text, StyleSheet, useWindowDimensions  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IndexScreen from './index';
import CadastroScreen from './cadastro';
import SeriesScreen from './series';



const Tab = createMaterialTopTabNavigator();

function MeusTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff8f8',
        tabBarInactiveTintColor: '#f5f5f5',
        tabBarIndicatorStyle: { backgroundColor: '#7a0505' },
        tabBarStyle:{
          backgroundColor: '#7a0505',
          elevation: 0,       
          shadowOpacity: 0,     
          borderBottomWidth: 0,    
          borderTopWidth: 0,    
        }
      }}
    >
       <Tab.Screen name="index" component={IndexScreen} options={{ title: 'Home' }} />
       <Tab.Screen name="series" component={SeriesScreen} options={{ title: 'Séries' }} />
       <Tab.Screen name="cadastro" component={CadastroScreen} options={{ title: 'Cadastro' }} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  //  CORRETO: Chamando o hook dentro do componente funcional App
  const { width } = useWindowDimensions();
  
  // O cálculo do tamanho da fonte também entra aqui dentro
  const dynamicFontSize = width > 400 ? 40 : 28;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={MeusTabs} 
          options={{ 
            title: 'CINEMANDO', 
            headerShadowVisible: false, 
            headerTitleAlign: 'center', 
    
            headerStyle: { 
              backgroundColor: '#000000',
              elevation: 0, 
              shadowOpacity: 0, 
            },
            headerTitleStyle:{
                alignItems:'center',
                justifyContent: 'center',
                letterSpacing: 7,
                fontWeight: '800', // Nota: fontWeight no React Native geralmente aceita strings como '800'
                fontFamily: 'chewy system-ui',
                fontSize: dynamicFontSize, // Aplica o tamanho responsivo aqui
            },
            headerTintColor: '#920606',
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8b0101',
  },
});
