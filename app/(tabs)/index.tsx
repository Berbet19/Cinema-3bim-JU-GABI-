import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Carrossel from '../../components/Carrossel';

export default function IndexScreen() {
  return (
    <View style={styles.all}>
      <ScrollView>
        <Carrossel/>

       

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#000000',
  },
});