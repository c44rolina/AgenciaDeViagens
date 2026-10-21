import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { colors } from '../../style/global';
import CustomButton from '../../componentes/CustomButton';

export default function Sobre() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sobre a ViajeMais 🌍</Text>
        <Text style={styles.text}>
          Há mais de 10 anos realizando sonhos e proporcionando as melhores experiências de viagem pelo mundo inteiro.
        </Text>
        <Text style={styles.text}><Text style={styles.bold}>Especialidade:</Text> Pacotes Internacionais e Nacionais</Text>
        <Text style={styles.text}><Text style={styles.bold}>Clientes Atendidos:</Text> +50.000 viajantes felizes</Text>
        <Text style={styles.text}><Text style={styles.bold}>Suporte:</Text> 24 horas durante a sua viagem</Text>

        <View style={styles.buttonBox}>
          <CustomButton title="Voltar para a Inicial" color={colors.primary} onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </View>
  );
}