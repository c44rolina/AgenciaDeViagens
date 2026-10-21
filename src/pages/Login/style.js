import { StyleSheet } from 'react-native';
import { colors } from '../../style/global';

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
    maxWidth: 350,
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.secondary,
    alignItems: 'center',
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonGroup: {
    width: '100%',
    marginTop: 12,
    gap: 10,
  },
});