import { StyleSheet } from 'react-native';
import { colors } from '../../style/global';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
    color: colors.primaryDark,
  },
  buttonBox: {
    marginTop: 15,
  },
});