import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../style/global';

export default function CustomInput({ label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize || 'none'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.textDark,
    marginBottom: 4,
    fontFamily: 'Avantgarde, "TeX Gyre Adventor", "URW Gothic L", sans-serif',
  },
  input: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 10,
    backgroundColor: colors.white,
    color: colors.textDark,
    fontSize: 14,
    fontFamily: 'Avantgarde, "TeX Gyre Adventor", "URW Gothic L", sans-serif',
  },
});