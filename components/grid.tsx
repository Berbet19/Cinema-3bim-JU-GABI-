import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { products } from '@/data/movie'; 

interface PhotoGalleryProps {
  Header: () => React.JSX.Element;
}

export default function PhotoGallery({ Header }: PhotoGalleryProps) {
  return (
    <FlatGrid
      itemDimension={110}
      data={products}
      spacing={10} 
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={Header}
      style={styles.grid} // <-- ADICIONE ISSO AQUI
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
  grid: {
    flex: 1, // <-- ISSO FORÇA A GRID A APARECER E OCUPAR A TELA
  },
  itemContainer: {
    height: 150, 
    borderRadius: 8,
    overflow: 'hidden', 
    backgroundColor: '#1a1a1a', 
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
