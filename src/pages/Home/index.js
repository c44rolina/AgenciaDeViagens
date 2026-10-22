import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import styles from './style';
import CustomToolbar from '../../componentes/CustomToolbar';
import CustomBottomBar from '../../componentes/CustomBottomBar';

export default function Home({ onNavigateSobre, onNavigateContato, onLogout }) {
  return (
    <View style={styles.container}>
    
      <CustomToolbar title="ViajeMais - Início" onLogout={onLogout} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeTitle}>Bem-vindo ao ViajeMais</Text>
          <Text style={styles.welcomeText}>
            Explore os melhores destinos e planeje sua próxima aventura com ofertas exclusivas.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Pacotes em Destaque</Text>

        <View style={styles.cardsContainer}>
     
          <View style={styles.card}>
            <Image 
              source={require('../../../assets/images/mexico.jpg')} 
              style={styles.cardImage} 
            />
            <View style={styles.cardBody}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Cancún - México</Text>
                <Text style={styles.tag}>Imperdível</Text>
              </View>
              <Text style={styles.cardDescription}>
                7 dias em resort All Inclusive com passagens e passeios inclusos.
              </Text>
              <Text style={styles.cardPriceLabel}>A partir de</Text>
              <Text style={styles.cardPrice}>R$ 3.890,00</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image 
              source={require('../../../assets/images/paris.jpg')} 
              style={styles.cardImage} 
            />
            <View style={styles.cardBody}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Paris - França</Text>
                <Text style={styles.tag}>Popular</Text>
              </View>
              <Text style={styles.cardDescription}>
                5 noites no centro de Paris com voos diretos e café da manhã.
              </Text>
              <Text style={styles.cardPriceLabel}>A partir de</Text>
              <Text style={styles.cardPrice}>R$ 5.200,00</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image 
              source={require('../../../assets/images/brasil.jpg')} 
              style={styles.cardImage} 
            />
            <View style={styles.cardBody}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Gramado - Brasil</Text>
                <Text style={styles.tag}>Oferta</Text>
              </View>
              <Text style={styles.cardDescription}>
                4 dias inesquecíveis na Serra Gaúcha com tour gastronômico inclusos.
              </Text>
              <Text style={styles.cardPriceLabel}>A partir de</Text>
              <Text style={styles.cardPrice}>R$ 1.250,00</Text>
            </View>
          </View>
        </View>
      </ScrollView>

    
      <CustomBottomBar 
        activeTab="Home"
        onNavigateHome={() => {}}
        onNavigateSobre={onNavigateSobre}
        onNavigateContato={onNavigateContato}
      />
    </View>
  );
}