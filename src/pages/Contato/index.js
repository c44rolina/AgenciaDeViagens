import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { colors } from '../../style/global';
import CustomButton from '../../componentes/CustomButton';

export default function Contato() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Fale com um Consultor 📞</Text>
        <Text style={styles.text}><Text style={styles.bold}>Atendimento:</Text> Segunda a Sexta, 8h às 20h</Text>
        <Text style={styles.text}><Text style={styles.bold}>WhatsApp:</Text> (11) 98888-7777</Text>
        <Text style={styles.text}><Text style={styles.bold}>E-mail:</Text> contato@viajemais.com.br</Text>
        <Text style={styles.text}><Text style={styles.bold}>Endereço:</Text> Av. Paulista, 1000 - São Paulo/SP</Text>

        <View style={styles.buttonBox}>
          <CustomButton title="Voltar para a Inicial" color={colors.primary} onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </View>
  );
}