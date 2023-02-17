import React, {useEffect, useState, useRef} from 'react';
import {connect} from 'react-redux';
import {
  FlatList,
  Image,
  RefreshControl,
  View,
  Text,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import StatusBar from '../../containers/StatusBar';
import ActivityIndicator from '../../containers/ActivityIndicator';
import MainHeader from '../../containers/MainHeader';
import * as HeaderButton from '../../containers/HeaderButton';
import MainScreen from '../../containers/MainScreen';

import I18n from '../../i18n';
import styles from './styles';
import images from '../../assets/images';

import {withActionSheet} from '../../containers/ActionSheet';
import {withTheme} from '../../theme';
import {COLOR_WHITE, themes} from '../../constants/colors';

import BalanceDetail from './BalanceDetail';
import NavButton from './NavButton';

const {width} = Dimensions.get('screen');

const HomeView = props => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    refreshing: false,
    loading: false,
    isUpdating: false,
  });
  const {loading, isUpdating, refreshing} = state;

  return (
    <MainScreen navigation={navigation}>
      <StatusBar />
      <MainHeader />
      {isUpdating && (
        <ActivityIndicator absolute theme={theme} size={'large'} />
      )}

      <BalanceDetail />
      <View style={styles.btnContainer}>
        <NavButton name={'Sponsor'} />
        <NavButton name={'Ranks'} />
        <NavButton name={'Direct / Indirect Sales'} />
        <NavButton name={'Statistics'} />
      </View>
    </MainScreen>
  );
};

const mapStateToProps = state => ({
  user: state.login.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: params => dispatch(setUserAction(params)),
  fetchUnread: params => dispatch(fetchUnreadAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withActionSheet(withTheme(HomeView)));
