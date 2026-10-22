import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#003B7A',       // Azul Marinho da Logo
  secondary: '#FF7A00',     // Laranja da Logo
  background: '#F0F4F8',    // Azul Suave para Fundo
  white: '#FFFFFF',
  textDark: '#1A2530',
  textLight: '#607285',
  errorRed: '#D32F2F',      // Cor para o aviso de erro
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});