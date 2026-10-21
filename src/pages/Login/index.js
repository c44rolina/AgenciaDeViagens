import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { colors } from '../../style/global';
import CustomInput from '../../componentes/CustomInput';
import CustomButton from '../../componentes/CustomButton';
export default function Login() {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const USER_VALIDO = 'aluno';
  const SENHA_VALIDA = '123456';

  const handleLogin = () => {
    if (!usuario.trim()) {
      Alert.alert('Atenção', 'Informe o seu usuário.');
      return;
    }
    if (!senha.trim()) {
      Alert.alert('Atenção', 'Informe a sua senha.');
      return;
    }

    if (usuario === USER_VALIDO && senha === SENHA_VALIDA) {
      setUsuario('');
      setSenha('');
      navigation.navigate('Home');
    } else {
      Alert.alert('Erro de Acesso', 'Usuário ou senha incorretos.');
    }
  };

  const handleLimpar = () => {
    setUsuario('');
    setSenha('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>ViajeMais ✈️</Text>
        <Text style={styles.subtitle}>Acesse a sua conta para planejar a sua próxima viagem</Text>

        <CustomInput
          label="Usuário:"
          placeholder="Digite: aluno"
          value={usuario}
          onChangeText={setUsuario}
        />

        <CustomInput
          label="Senha:"
          placeholder="Digite: 123456"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <View style={styles.buttonGroup}>
          <CustomButton title="Entrar na Passagem" color={colors.primaryDark} onPress={handleLogin} />
          <CustomButton title="Limpar Dados" color="#6c757d" onPress={handleLimpar} />
        </View>
      </View>
    </View>
  );
}