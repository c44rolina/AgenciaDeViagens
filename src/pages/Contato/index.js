import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';

import styles from './style';
import { colors } from '../../style/global';
import CustomToolbar from '../../componentes/CustomToolbar';
import CustomBottomBar from '../../componentes/CustomBottomBar';
import CustomInput from '../../componentes/CustomInput';
import CustomButton from '../../componentes/CustomButton';

export default function Contato({ onNavigateHome, onNavigateSobre, onLogout }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [statusEnvio, setStatusEnvio] = useState('');
  const [erroForm, setErroForm] = useState('');

  const handleEnviarMensagem = () => {
    setStatusEnvio('');
    setErroForm('');

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      setErroForm('Por favor, preencha todos os campos do formulário.');
      return;
    }

    
    setStatusEnvio('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <View style={styles.container}>
     
      <CustomToolbar 
        title="Contato" 
        onBack={onNavigateHome} 
        onLogout={onLogout} 
      />

     
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      
        <View style={styles.card}>
          <Text style={styles.companyName}>ViajeMais Agência de Viagens</Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Endereço:</Text>
            <Text style={styles.infoText}>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Telefone / WhatsApp:</Text>
            <Text style={styles.infoText}>(11) 99999-8888</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>E-mail:</Text>
            <Text style={styles.infoText}>contato@viajemais.com.br</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Horário de Atendimento:</Text>
            <Text style={styles.infoText}>Segunda a Sexta: 08h às 20h | Sábado: 09h às 14h</Text>
          </View>
        </View>

        
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Envie uma Mensagem</Text>

          <View style={styles.form}>
            <CustomInput
              label="Nome Completo:"
              placeholder="Digite seu nome"
              value={nome}
              onChangeText={(text) => {
                setNome(text);
                if (erroForm) setErroForm('');
              }}
            />

            <CustomInput
              label="E-mail de Contato:"
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (erroForm) setErroForm('');
              }}
            />

            <Text style={styles.textAreaLabel}>Sua Mensagem:</Text>
            <TextInput
              style={styles.textAreaInput}
              placeholder="Como podemos te ajudar com a sua viagem?"
              multiline={true}
              numberOfLines={4}
              value={mensagem}
              onChangeText={(text) => {
                setMensagem(text);
                if (erroForm) setErroForm('');
              }}
            />

            {erroForm !== '' && (
              <Text style={styles.errorText}>{erroForm}</Text>
            )}

            {statusEnvio !== '' && (
              <Text style={styles.successText}>{statusEnvio}</Text>
            )}

            <CustomButton
              title="Enviar Mensagem"
              color={colors.primary}
              onPress={handleEnviarMensagem}
            />
          </View>
        </View>

        <View style={styles.socialBox}>
          <Text style={styles.sectionTitle}>Siga Nossas Redes</Text>
          <Text style={styles.socialText}>
            • Instagram: @viajemais.oficial{'\n'}
            • Facebook: /viajemaisviagens{'\n'}
            • LinkedIn: /company/viajemais
          </Text>
        </View>
      </ScrollView>

     
      
    </View>
  );
}