import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../style/global';

const FONT_FAMILY = 'Avantgarde, "TeX Gyre Adventor", "URW Gothic L", sans-serif';

export default function CustomBottomBar({ activeTab, onNavigateHome, onNavigateSobre, onNavigateContato }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.tab, activeTab === 'Home' && styles.activeTab]} 
        onPress={onNavigateHome}
      >
        <Text style={[styles.tabText, activeTab === 'Home' && styles.activeTabText]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.tab, activeTab === 'Sobre' && styles.activeTab]} 
        onPress={onNavigateSobre}
      >
        <Text style={[styles.tabText, activeTab === 'Sobre' && styles.activeTabText]}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.tab, activeTab === 'Contato' && styles.activeTab]} 
        onPress={onNavigateContato}
      >
        <Text style={[styles.tabText, activeTab === 'Contato' && styles.activeTabText]}>Contato</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderTopWidth: 3,
    borderTopColor: colors.secondary,
    backgroundColor: '#FAFAFA',
  },
  tabText: {
    fontSize: 13,
    color: colors.textLight,
    fontFamily: FONT_FAMILY,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  activeTabText: {
    color: colors.secondary,
    fontWeight: '700',
  },
});