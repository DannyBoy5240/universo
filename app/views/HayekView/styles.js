import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  summaryBoxContainer: {
    paddingHorizontal: 35,
    paddingVertical: 20,
  },
  summaryBox: {
    paddingHorizontal: 17,
    paddingVertical: 25,
    borderRadius: 29,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryTitle: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 9,
  },
  summaryTokenDescription: {
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
  summaryTokenPrice: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    fontWeight: '700',
  },
  summaryIconBox: {
    width: 81,
    height: 81,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  summaryBoxMain: {
    paddingHorizontal: 11,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabBarContainer: {
    width: '100%',
    paddingHorizontal: 27,
    paddingVertical: 26,
  },
  tabContainer: {
    width: '33%',
  },
  tabLabel: {
    textAlign: 'center',
    paddingVertical: 12,
  },
  tabText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  tabItem: {
    borderRadius: 29,
    alignItems: 'center',
  },
  tabItemNone: {
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 29,
  },
  priceContainer: {
    paddingHorizontal: 26,
    paddingVertical: 7,
  },
  priceBox: {
    paddingHorizontal: 32,
    paddingVertical: 27,
    borderRadius: 29,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#aaaaaa',
    paddingHorizontal: 19,
    paddingVertical: 8,
  },
  titleText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 8,
  },
  valueText: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '700',
  },
});
