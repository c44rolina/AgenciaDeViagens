import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

export default function App() {
 
  const [telaAtual, setTelaAtual] = useState('Login');

  
  const handleLoginSuccess = () => setTelaAtual('Home');
  const handleNavigateHome = () => setTelaAtual('Home');
  const handleNavigateSobre = () => setTelaAtual('Sobre');
  const handleNavigateContato = () => setTelaAtual('Contato');
  const handleLogout = () => setTelaAtual('Login');

  return (
    <View style={styles.container}>
      {telaAtual === 'Login' && (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}

      {telaAtual === 'Home' && (
        <Home 
          onNavigateSobre={handleNavigateSobre}
          onNavigateContato={handleNavigateContato}
          onLogout={handleLogout}
        />
      )}

      {telaAtual === 'Sobre' && (
        <Sobre 
          onNavigateHome={handleNavigateHome}
          onNavigateSobre={handleNavigateSobre}
          onNavigateContato={handleNavigateContato}
          onLogout={handleLogout}
        />
      )}

      {telaAtual === 'Contato' && (
        <Contato 
          onNavigateHome={handleNavigateHome}
          onNavigateSobre={handleNavigateSobre}
          onNavigateContato={handleNavigateContato}
          onLogout={handleLogout}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});