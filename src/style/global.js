import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#00b4d8',       // Azul Claro Principal
  primaryDark: '#0077b6',   // Azul Oceano
  secondary: '#90e0ef',     // Azul Pastel Soft
  background: '#f0f8ff',    // Azul Céu Suave
  white: '#ffffff',
  textDark: '#03045e',      // Azul Marinho Escuro
  textLight: '#52796f',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});