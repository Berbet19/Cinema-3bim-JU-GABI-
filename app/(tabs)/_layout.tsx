
import { View, Text, StyleSheet } from 'react-native';
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

// 3. Criando o Stack Navigator que vai segurar o Header principal
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Passamos o componente de abas dentro de uma tela do Stack */}
        <Stack.Screen 
          name="Home" 
          component={MeusTabs} 
          options={{ 
            title: 'CINEMANDO', // Título do Header principal
            headerShadowVisible: false, // Remove a linha/sombra no iOS e Android
            headerTitleAlign: 'center', 
    
            headerStyle: { 
              backgroundColor: '#000000',
              elevation: 0, // Remove a sombra no Android para fundir com as abas
              shadowOpacity: 0, // Remove a sombra no iOS
            },
            headerTitleStyle:{
                alignItems:'center',
                justifyContent: 'center',
                letterSpacing: 7,
                fontSize: 69,
                fontWeight: 800,
                fontFamily:   'chewy system-ui',
                

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
