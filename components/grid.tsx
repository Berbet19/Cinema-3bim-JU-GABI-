import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { products } from '@/data/movie'; 

export default function PhotoGallery() {
  return (
    <FlatGrid
      itemDimension={110}
      data={products}
      spacing={10} 
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image 
            source={item.imagem} 
            style={styles.image} 
            resizeMode="cover"
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 120, //
    borderRadius: 8,
    overflow: 'hidden', 
    backgroundColor: '#f0f0f0', 
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
