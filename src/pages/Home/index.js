import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import CustomButton from '../../componentes/CustomButton';
import { colors } from '../../style/global';
import styles from './style';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Descubra o Mundo Connosco! 🏖️</Text>
        <Text style={styles.description}>
          Conectamos você aos melhores destinos do planeta. Encontre pacotes promocionais, voos e hotéis inesquecíveis.
        </Text>

        <View style={styles.buttonContainer}>
          <CustomButton title="Conhecer Nossos Destinos (Sobre)" color={colors.primary} onPress={() => navigation.navigate('Sobre')} />
          <CustomButton title="Falar com Atendimento (Contato)" color={colors.primaryDark} onPress={() => navigation.navigate('Contato')} />
          <CustomButton title="Sair da Conta" color="#6c757d" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </View>
  );
}