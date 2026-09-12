import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Carrossel from '../../components/Carrossel';
import { FlatGrid } from 'react-native-super-grid';
import  PhotoGallery from '@/components/grid'

export default function IndexScreen() {
  return (
    <View style={styles.all}>
      <ScrollView>
        <Carrossel/>

       

      </ScrollView>

      <PhotoGallery/>
    </View>

    


   






  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#000000',
  },
});