import React, {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import {
  COLOR_WHITE,
  COLOR_ULTRAMARINE,
  COLOR_DARKBLACK,
} from '../../constants/colors';
import {withTheme} from '../../theme';
import images from '../../assets/images';
import styles from './styles';

import MainScreen from '../../containers/MainScreen';
import StatusBar from '../../containers/StatusBar';
import MainHeader from '../../containers/MainHeader';
import SearchData from './SearchData';
import DataItem from './DataItem';

const MyDataView = props => {
  const tData = [
    {
      id: 1,
      title: 'Edit PIN',
    },
    {
      id: 2,
      title: 'Edit My Information',
    },
    {
      id: 3,
      title: 'Edit Wallet',
    },
  ];

  return (
    <MainScreen style={{backgroundColor: COLOR_DARKBLACK}}>
      <StatusBar />
      <MainHeader />
      <SearchData />
      <View style={{flexGrow: 1, backgroundColor: COLOR_ULTRAMARINE}}>
        {tData.map(idx => (
          <DataItem data={idx} key={'dat' + idx.id} />
        ))}
      </View>
    </MainScreen>
  );
};
const mapStateToProps = state => ({
  user: state.login.user,
});

const mapDispatchToProps = dispatch => ({
  fetchUnread: params => dispatch(fetchUnreadAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(MyDataView));
