import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './style';
import { colors } from '../../style/global';
import CustomInput from '../../componentes/CustomInput';
import CustomButton from '../../componentes/CustomButton';

export default function Login({ onLoginSuccess }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const USER_VALIDO = 'aluno';
  const SENHA_VALIDA = '123456';

  const handleLogin = () => {
    setMensagemErro('');

   
    if (!usuario.trim() || !senha.trim()) {
      setMensagemErro('Por favor, preencha todos os campos para continuar.');
      return;
    }

  
    if (usuario === USER_VALIDO && senha === SENHA_VALIDA) {
      setUsuario('');
      setSenha('');
      setMensagemErro('');
      if (onLoginSuccess) onLoginSuccess();
    } else {
      setMensagemErro('Usuário ou senha incorretos. Tente novamente.');
    }
  };

  const handleLimpar = () => {
    setUsuario('');
    setSenha('');
    setMensagemErro('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={require('../../../assets/images/logo.png')} 
          style={styles.logoImage} 
        />

        <Text style={styles.title}>Acesse a sua conta</Text>
        <Text style={styles.description}>
          Planeie as suas próximas férias com as melhores ofertas.
        </Text>

        <View style={styles.form}>
          <CustomInput
            label="Usuário ou E-mail:"
            placeholder="Digite seu usuário ou e-mail"
            value={usuario}
            onChangeText={(text) => {
              setUsuario(text);
              if (mensagemErro) setMensagemErro('');
            }}
            autoCapitalize="none"
          />

          <CustomInput
            label="Senha:"
            placeholder="Digite sua senha"
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => {
              setSenha(text);
              if (mensagemErro) setMensagemErro('');
            }}
          />

          {mensagemErro !== '' && (
            <Text style={styles.errorText}>{mensagemErro}</Text>
          )}

          <View style={styles.buttonGroup}>
            <CustomButton
              title="Entrar"
              color={colors.primary}
              onPress={handleLogin}
            />
            <CustomButton
              title="Limpar"
              color={colors.secondary}
              onPress={handleLimpar}
            />
          </View>
        </View>
      </View>
    </View>
  );
}