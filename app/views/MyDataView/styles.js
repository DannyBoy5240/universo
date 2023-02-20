import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 37,
    paddingBottom: 23,
  },
  searchBtn: {
    width: 24,
    height: 24,
  },
  searchBox: {
    paddingHorizontal: 11,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  DataItemBox: {
    height: 57,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 19,
  },
  DataItemAvatarBox: {
    width: 39,
    height: 39,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAvatar: {
    width: 25,
    height: 25,
  },
  DataItemBoxText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    marginLeft: 10,
  },
  DataItemDateText: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    marginLeft: 9,
  },
  moreBtn: {
    paddingLeft: 21,
    borderLeftWidth: 1,
    height: 30,
    justifyContent: 'center',
  },
  transactionText: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    marginBottom: 9,
  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarContainer: {
    width: '100%',
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
    borderRadius: 12,
  },
});
