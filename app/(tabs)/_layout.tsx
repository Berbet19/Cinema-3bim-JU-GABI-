import React from 'react';
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
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: '#757575',
        tabBarIndicatorStyle: { backgroundColor: '#6200ee' },
      }}
    >
       <Tab.Screen name="index" component={IndexScreen} options={{ title: 'home' }} />
       <Tab.Screen name="series" component={SeriesScreen} options={{ title: 'Séries' }} />
      <Tab.Screen name="cadastro" component={CadastroScreen} options={{ title: 'cadastro' }} />
      
     

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
            headerStyle: { 
              backgroundColor: '#6200ee',
              elevation: 0, // Remove a sombra no Android para fundir com as abas
              shadowOpacity: 0, // Remove a sombra no iOS

            },
            headerTitleStyle:{
                alignItems:'center',
                justifyContent: 'center',
                letterSpacing: 5,
                

            },
            headerTintColor: '#fff',
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
    backgroundColor: '#f5f5f5',
  },
});
