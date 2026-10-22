import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import styles from './style';
import CustomToolbar from '../../componentes/CustomToolbar';
import CustomBottomBar from '../../componentes/CustomBottomBar';

export default function Sobre({ onNavigateHome, onNavigateContato, onLogout }) {
  return (
    <View style={styles.container}>
    
      <CustomToolbar 
        title="Sobre" 
        onBack={onNavigateHome} 
        onLogout={onLogout} 
      />


      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      
        <View style={styles.card}>
          <Image 
            source={require('../../../assets/images/logo.png')} 
            style={styles.logoImage} 
          />
          <Text style={styles.appName}>ViajeMais Agência de Viagens</Text>
          <Text style={styles.versionText}>Versão da Aplicação: 1.0.0</Text>
          <Text style={styles.description}>
            A ViajeMais é uma agência de turismo especializada em oferecer experiências inesquecíveis, com pacotes de viagens nacionais e internacionais adaptados ao seu perfil e orçamento.
          </Text>
        </View>

       
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Pilares Institucionais</Text>

          <View style={styles.topicBox}>
            <Text style={styles.topicTitle}>Missão</Text>
            <Text style={styles.topicText}>
              Conectar pessoas a novos destinos e culturas através de viagens acessíveis, seguras e com excelente suporte.
            </Text>
          </View>

          <View style={styles.topicBox}>
            <Text style={styles.topicTitle}>Visão</Text>
            <Text style={styles.topicText}>
              Ser reconhecida como a plataforma de turismo mais confiável e inovadora no mercado digital.
            </Text>
          </View>

          <View style={styles.topicBox}>
            <Text style={styles.topicTitle}>Valores</Text>
            <Text style={styles.topicText}>
              • Transparência no atendimento{'\n'}
              • Foco no cliente e na segurança{'\n'}
              • Inovação e busca constante por melhores ofertas
            </Text>
          </View>
        </View>

        
        <View style={styles.academicBox}>
          <Text style={styles.academicTitle}>Informações Adicionais</Text>
          <Text style={styles.academicText}>
            Esta aplicação foi desenvolvida como projeto acadêmico para a disciplina de Programação para Dispositivos Móveis I.
          </Text>
        </View>
      </ScrollView>

   
    
    </View>
  );
}