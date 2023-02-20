import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  notificationText: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '700',
  },
  notificationBox: {
    paddingHorizontal: 35,
    paddingVertical: 20,
  },
  dateText: {
    fontFamily: 'Montserrat',
    fontSize: 11,
  },
  dayText: {
    fontFamily: 'Montserrat',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 5,
  },
  highlightdateBox: {
    borderRadius: 29,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginTop: 28,
  },
  dateBox: {},
  dateBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alertBoxContainer: {
    width: '100%',
  },
  alertBoxBox: {
    paddingLeft: 7,
    paddingTop: 13,
    paddingRight: 18,
    paddingBototm: 28,
  },
  alertContainer: {
    paddingHorizontal: 30,
    marginBottom: 12,
    height: 118,
  },
  closeBtn: {
    width: 20,
    height: 20,
  },
  titleText: {
    fontFamily: 'Montserrat',
    fontSize: 10,
  },
  subTitleText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: '700',
  },
  contentText: {
    fontFamily: 'Montserrat',
    fontSize: 10,
  },
  viewMoreText: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    marginTop: 14,
  },
});
