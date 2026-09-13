import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, Animated, Dimensions  } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const { width: LARGURA_TELA } = Dimensions.get('window');

// Array com 5 filmes reais
const FILMES = [
  {
    id: '1',
    titulo: 'HOMEM-ARANHA',
    subtitulo: 'UM NOVO DIA',
    classificacao: '12',
    duracao: '2h24',
    categorias: 'Ação, Aventura, Fantasia',
    sinopse: 'Em uma Nova York onde ninguém mais sabe sua verdadeira identidade, Peter Parker enfrenta novos vilões enquanto descobre o real significado de recomeçar.',
    imagem: require('../assets/images/fotos_carrossel/homem-aranha.png'),
  },
  {
    id: '2',
    titulo: 'BATMAN',
    subtitulo: 'THE BATMAN',
    classificacao: '14',
    duracao: '2h56',
    categorias: 'Ação, Crime, Drama',
    sinopse: 'Quando um assassino sádico deixa pistas, o Batman investiga o submundo de Gotham.',
    imagem: require('../assets/images/fotos_carrossel/thebatman.png'),
  },
  {
    id: '3',
    titulo: 'DA MAGIA À SEDUÇÃO',
    subtitulo: 'FEITIÇO DE AMOR',
    classificacao: '14',
    duracao: '1h58',
    categorias: 'Fantasia, Drama, Romance',
    sinopse: 'As irmãs da família Owens se reúnem novamente para quebrar de vez a antiga maldição do amor que assombra gerações de mulheres da linhagem.',
    imagem: require('../assets/images/fotos_carrossel/magiaaseducao.jpg'),
  },
  {
    id: '4',
    titulo: 'A ODISSEIA',
    subtitulo: 'O RETORNO DE ODISSEU',
    classificacao: '14',
    duracao: '2h52',
    categorias: 'Ação, Aventura, Fantasia',
    sinopse: 'Após a Guerra de Troia, o lendário rei Odisseu enfrenta criaturas míticas, deuses e perigos extremos em sua épica jornada de volta para casa.',
    imagem: require('../assets/images/fotos_carrossel/aodisseia.jpg'),
  },
  {
    id: '5',
    titulo: 'A QUEDA 2',
    subtitulo: 'NO LIMITE',
    classificacao: '16',
    duracao: '1h45',
    categorias: 'Suspense, Ação',
    sinopse: 'Buscando superar o luto, duas amigas encaram uma perigosa escalada na Tailândia até que um deslizamento as deixa presas a mais de 900 metros de altura.',
    imagem: require('../assets/images/fotos_carrossel/aqueda2.jpg'),
  },
];

export default function Carrossel() {
  const navigation = useNavigation<any>();
  const [activeIndex, setActiveIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const switchSlide = (novoIndice: number) => {
    Animated.timing(fadeAnim, {
      toValue: 0.2,
      duration: 200,
      useNativeDriver: false,
    }).start(() => {
      setActiveIndex(novoIndice);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }).start();
    });
  };

  const avancarSlide = () => {
    const nextIndex = (activeIndex + 1) % FILMES.length;
    switchSlide(nextIndex);
  };

   const voltarSlide = () => {
    const prevIndex = (activeIndex - 1 + FILMES.length) % FILMES.length;
    switchSlide(prevIndex);
  };

  const bolinhasInferiores = (index: number) => {
    if (index !== activeIndex) {
      switchSlide(index);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      avancarSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const filmeAtual = FILMES[activeIndex];

   return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedContainer, { opacity: fadeAnim }]}>
        <ImageBackground 
          source={filmeAtual.imagem} 
          style={styles.image}
          resizeMode="cover"
        >
          <View style={styles.overlay} />

          {/* Seta da Esquerda */}
          <TouchableOpacity style={styles.setaEsquerda} onPress={voltarSlide}>
            <MaterialIcons name="chevron-left" size={40} color="#fff" />
          </TouchableOpacity>

          {/* Seta da Direita */}
          <TouchableOpacity style={styles.setaDireita} onPress={avancarSlide}>
            <MaterialIcons name="chevron-right" size={40} color="#fff" />
          </TouchableOpacity>

          <View style={styles.infoContainer}>
            <Text style={styles.titulo}>{filmeAtual.titulo}</Text>
            <Text style={styles.subtitulo}>{filmeAtual.subtitulo}</Text>

            <View style={styles.detalhesRow}>
              <Text style={styles.detalhesText}>Cinema</Text>
              <Text style={styles.dotSeparator}>•</Text>
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{filmeAtual.classificacao}</Text>
              </View>
              <Text style={styles.dotSeparator}>•</Text>
              <Text style={styles.detalhesText}>{filmeAtual.duracao}</Text>
              <Text style={styles.dotSeparator}>•</Text>
              <Text style={styles.detalhesText}>{filmeAtual.categorias}</Text>
            </View>

            <Text style={styles.sinopse} numberOfLines={2}>
              {filmeAtual.sinopse}
            </Text>

            <View style={styles.botoesRow}>
              <TouchableOpacity
                style={styles.btnIngressos}
                onPress={() => navigation.navigate('cadastro')}>
                <Text style={styles.btnIngressosText}>Ingressos</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Animated.View>

      <View style={styles.dotsContainer}>
        {FILMES.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.dotActive : styles.dotInactive,
            ]}
            onPress={() => bolinhasInferiores(index)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
      width: LARGURA_TELA - 32,
      height: (LARGURA_TELA - 32) * 1.0,
    alignSelf: 'center',
    position: 'relative',
    backgroundColor: '#000',
    marginBottom: 20, 
    marginTop: 10, 
    borderRadius: 12, 
    overflow: 'hidden',
  },
  animatedContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
 
    setaEsquerda: {
    position: 'absolute',
    left: 5,
    top: '25%',
    zIndex: 10,
    padding: 5,
  },
setaDireita: {
    position: 'absolute',
    right: 5,
    top: '25%',
    zIndex: 10,
    padding: 5,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 2,
  },
  detalhesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  detalhesText: {
    color: '#aaa',
    fontSize: 12,
  },
  dotSeparator: {
    color: '#aaa',
    marginHorizontal: 6,
  },
  badgeContainer: {
    backgroundColor: '#333',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  sinopse: {
    color: '#ddd',
    fontSize: 13,
    marginTop: 8,
    lineHeight: 18,
  },
  botoesRow: {
    marginTop: 12,
  },
  btnIngressos: {
    backgroundColor: '#e50914',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  btnIngressosText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 15,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    width: 18,
    backgroundColor: '#fff',
  },
  dotInactive: {
    width: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});