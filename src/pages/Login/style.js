import { StyleSheet } from 'react-native';
import { colors } from '../../style/global';

const FONT_FAMILY = 'Avantgarde, "TeX Gyre Adventor", "URW Gothic L", sans-serif';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    elevation: 4,
  },
  logoImage: {
    width: 220,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 4,
    textAlign: 'center',
    fontFamily: FONT_FAMILY,
  },
  description: {
    fontSize: 13,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 18,
    fontFamily: FONT_FAMILY,
  },
  form: {
    width: '100%',
  },
  errorText: {
    color: colors.errorRed,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    backgroundColor: '#FFEBEE',
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FFCDD2',
    fontFamily: FONT_FAMILY,
  },
  buttonGroup: {
    width: '100%',
    marginTop: 8,
    gap: 8,
  },
});