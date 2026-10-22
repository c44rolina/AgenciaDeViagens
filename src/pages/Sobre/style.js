import { StyleSheet } from 'react-native';
import { colors } from '../../style/global';

const FONT_FAMILY = 'Avantgarde, "TeX Gyre Adventor", "URW Gothic L", sans-serif';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
  },
  logoImage: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  appName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: FONT_FAMILY,
    marginBottom: 4,
  },
  versionText: {
    fontSize: 12,
    color: colors.textLight,
    fontFamily: FONT_FAMILY,
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: colors.textDark,
    textAlign: 'center',
    fontFamily: FONT_FAMILY,
    lineHeight: 20,
  },
  sectionCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: FONT_FAMILY,
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: colors.secondary,
    paddingBottom: 4,
  },
  topicBox: {
    marginBottom: 14,
  },
  topicTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.secondary,
    fontFamily: FONT_FAMILY,
    marginBottom: 4,
  },
  topicText: {
    fontSize: 13,
    color: colors.textDark,
    fontFamily: FONT_FAMILY,
    lineHeight: 18,
  },
  academicBox: {
    backgroundColor: '#EBF3FA',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    marginBottom: 24,
  },
  academicTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: FONT_FAMILY,
    marginBottom: 4,
  },
  academicText: {
    fontSize: 12,
    color: colors.textDark,
    fontFamily: FONT_FAMILY,
    lineHeight: 18,
  },
});