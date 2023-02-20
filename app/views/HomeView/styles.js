import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarContainer: {
    width: '100%',
    borderBottomWidth: 1,
  },
  tabContainer: {
    width: '33%',
  },
  tabLabel: {
    textAlign: 'center',
    paddingVertical: 12,
  },
  addMeetupBtn: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    zIndex: 10,
  },
  addImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  homeLogo: {
    width: 73,
    height: 44,
    resizeMode: 'contain',
  },
  postUserList: {
    paddingVertical: 20,
    paddingLeft: 15,
  },
  postUser: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#5790DF',
    padding: 2,
  },
  postUserAvatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  postUserName: {
    fontWeight: '600',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
    color: 'white',
  },
  textContainer: {
    justifyContent: 'center',
  },
  tabItem: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
  },
  activeTab: {
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  tabText: {
    fontFamily: 'Raleway',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19,
  },
  suggestBoxHeader: {
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 28,
    marginTop: 20,
  },
  miniIcon: {
    width: 17,
    height: 15,
  },
  rankText: {
    fontSize: 9,
    lineHeight: 17,
    marginTop: 8,
  },

  optionValue: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 17,
    marginTop: 8,
  },
  optionTitle: {
    fontFamily: 'Montserrat',
    fontSize: 8,
    lineHeight: 17,
  },
  optionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
  },
  followWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    width: '100%',
    borderRadius: 29,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
  },

  avatarIcon: {
    width: 112,
    height: 112,
  },
  balanceText: {
    fontSize: 18,
    lineHeight: 50,
  },
  balancePriceBox: {
    alignItems: 'center',
    width: 170,
    height: 33,
    borderRadius: 13,
    marginBottom: 20,
    marginTop: 6,
  },
  balancePriceText: {
    justifyContent: 'center',
    fontSize: 22,
    fontWeight: '800',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnBox: {
    width: 100,
    height: 127,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 29,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  btnAvatar: {
    width: 28,
    height: 28,
  },
  btnText: {
    fontFamily: 'Montserrat',
    fontSize: 13.5,
    fontWeight: '600',
    lineHeight: 17,
    marginTop: 18,
    textAlign: 'center',
  },

  recentActivityText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  recentActivityBox: {
    height: 73,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 22,
  },
  recentActivityAvatarBox: {
    width: 39,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  recentActivityBoxText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    marginLeft: 16,
  },
  moreActivityBtn: {
    paddingLeft: 22,
    paddingRight: 10,
    borderLeftWidth: 1,
  },

  cardContainer: {
    borderRadius: 29,
    paddingHorizontal: 1,
    paddingVertical: 1,
  },
  cardContainerBorder: {
    borderRadius: 29,
    marginHorizontal: 28,
    marginVertical: 20,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  cardBox: {
    height: 139,
    borderRadius: 29,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardPic: {
    width: 112,
    height: 94,
  },
  cardInfo: {
    marginLeft: 26,
    alignItems: 'center',
  },
  cardInfoText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    width: 129,
  },
  cardInfoBtn: {
    width: 129,
    height: 32,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 29,
    marginTop: 13,
  },
  cardInfoBtnText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
});
