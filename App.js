
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [tela, setTela] = useState('Login');

  return (
    <View style={styles.container}>
      {tela === 'Login' && (
        <>
          <Text style={styles.titulo}>ViajeMais</Text>
          <Text style={styles.texto}>
            Encontre seu próximo destino!
          </Text>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setTela('Home')}
          >
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </>
      )}

      {tela === 'Home' && (
        <>
          <Text style={styles.titulo}>Início</Text>
          <Text style={styles.texto}>
            Bem-vindo ao ViajeMais!
          </Text>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setTela('Sobre')}
          >
            <Text style={styles.textoBotao}>Sobre a agência</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setTela('Contato')}
          >
            <Text style={styles.textoBotao}>Contato</Text>
          </TouchableOpacity>
        </>
      )}

      {tela === 'Sobre' && (
        <>
          <Text style={styles.titulo}>Nossa Agência</Text>
          <Text style={styles.texto}>
            A ViajeMais ajuda você a planejar suas viagens.
          </Text>
          <BotaoVoltar onPress={() => setTela('Home')} />
        </>
      )}

      {tela === 'Contato' && (
        <>
          <Text style={styles.titulo}>Atendimento</Text>
          <Text style={styles.texto}>
            Entre em contato com a equipe ViajeMais.
          </Text>
          <BotaoVoltar onPress={() => setTela('Home')} />
        </>
      )}
    </View>
  );
}

function BotaoVoltar({ onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>Voltar ao início</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 24,
  },
  titulo: {
    color: '#0077b6',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  texto: {
    color: '#333333',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
  },
  botao: {
    backgroundColor: '#0077b6',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginVertical: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
