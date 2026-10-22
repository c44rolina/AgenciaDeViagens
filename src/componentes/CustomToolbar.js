import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../style/global';

const FONT_FAMILY = 'Avantgarde, "TeX Gyre Adventor", "URW Gothic L", sans-serif';

export default function CustomToolbar({ title, onLogout, onBack }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftGroup}>
        {onBack && (
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backText}>← Voltar</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>

      {onLogout && (
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    elevation: 4,
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backButton: {
    paddingVertical: 4,
    paddingRight: 8,
  },
  backText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: FONT_FAMILY,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: FONT_FAMILY,
  },
  logoutButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  logoutText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: FONT_FAMILY,
  },
});