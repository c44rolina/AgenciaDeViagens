import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../style/global';

export default function CustomButton({ title, onPress, color }) {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: color || colors.primaryDark }]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});