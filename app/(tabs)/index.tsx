import React from 'react';
import { View, StyleSheet } from 'react-native';
import Carrossel from '../../components/Carrossel';
import PhotoGallery from '@/components/grid';

export default function IndexScreen() {
  return (
    <View style={styles.all}>
      
      {/* Passamos como uma função que retorna o componente */}
      <PhotoGallery Header={() => <Carrossel />} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
