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
  welcomeBox: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.white,
    fontFamily: FONT_FAMILY,
    marginBottom: 6,
  },
  welcomeText: {
    fontSize: 14,
    color: '#E0E8F5',
    fontFamily: FONT_FAMILY,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: FONT_FAMILY,
    marginBottom: 16,
    letterSpacing: 0.3,
  },
  cardsContainer: {
    gap: 20,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.textDark,
    fontFamily: FONT_FAMILY,
  },
  tag: {
    backgroundColor: '#FFEAD5',
    color: colors.secondary,
    fontSize: 10,
    fontWeight: 'bold',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontFamily: FONT_FAMILY,
    textTransform: 'uppercase',
  },
  cardDescription: {
    fontSize: 13,
    color: colors.textLight,
    fontFamily: FONT_FAMILY,
    lineHeight: 18,
    marginBottom: 12,
  },
  cardPriceLabel: {
    fontSize: 11,
    color: colors.textLight,
    fontFamily: FONT_FAMILY,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secondary,
    fontFamily: FONT_FAMILY,
  },
});