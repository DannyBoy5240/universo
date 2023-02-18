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

  avatarIcon: {
    width: 90,
    height: 90,
  },
  rankText: {
    fontSize: 9,
    lineHeight: 17,
    marginTop: 8,
  },
  balanceText: {
    fontSize: 18,
    lineHeight: 50,
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
    paddingVertical: 20,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  btnContainer: {
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnBox: {
    width: 150,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 29,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  btnAvatar: {
    width: 24,
    height: 24,
    position: 'absolute',
    marginLeft: 18,
    marginTop: 18,
  },
  btnAvatarBack: {
    width: 49,
    height: 51,
  },
  btnText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    lineHeight: 14,
    marginTop: 18,
    textAlign: 'center',
  },
});
