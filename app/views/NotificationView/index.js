import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {setUser as setUserAction} from '../../actions/login';
import ActivityIndicator from '../../containers/ActivityIndicator';
import scrollPersistTaps from '../../utils/scrollPersistTaps';
import {withActionSheet} from '../../containers/ActionSheet';

import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_ULTRAMARINE,
  COLOR_DARKBLACK,
} from '../../constants/colors';
import {withTheme} from '../../theme';
import images from '../../assets/images';
import styles from './styles';

import StatusBar from '../../containers/StatusBar';
import MainHeader from '../../containers/MainHeader';
import MainScreen from '../../containers/MainScreen';
import AlertBox from './AlertBox';

const NotificationView = props => {
  const curDate = [12, 13, 14, 15, 16, 17];
  const curNoti = [
    {
      id: 1,
      title: 'T3 FEB',
      subTitle: 'Nos reunimos! Viernes 7 feb',
      text: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipiscing’',
    },
    {
      id: 2,
      title: 'T4 FEB',
      subTitle: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipiscing’',
    },
    {
      id: 3,
      title: 'T5 FEB',
      subTitle: 'Lorem Ipsum dolor sit',
      text: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipiscing’',
    },
    {
      id: 4,
      title: 'T6 FEB',
      subTitle: 'Lorem Ipsum dolor sit',
      text: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipiscing’',
    },
  ];
  const currentDate = 13;

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <MainScreen
      style={{backgroundColor: COLOR_ULTRAMARINE, paddingBottom: tabBarHeight}}>
      <View style={{backgroundColor: COLOR_DARKBLACK, marginBottom: 20}}>
        <StatusBar />
        <MainHeader />
        <View style={styles.notificationBox}>
          <Text style={[styles.notificationText, {color: COLOR_WHITE}]}>
            Notifications
          </Text>
          <View style={styles.dateBoxContainer}>
            {curDate.map(idx => (
              <View
                style={[
                  styles.highlightdateBox,
                  {backgroundColor: currentDate == idx ? '#00edcf' : '#000'},
                ]}
                key={'date' + idx}>
                <View style={styles.dateBox}>
                  <Text
                    style={[
                      styles.dateText,
                      {color: currentDate == idx ? COLOR_BLACK : COLOR_WHITE},
                    ]}>
                    MAR
                  </Text>
                  <Text
                    style={[
                      styles.dayText,
                      {color: currentDate == idx ? COLOR_BLACK : COLOR_WHITE},
                    ]}>
                    {idx}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
      {/* <View styles={[styles.alertBoxContainer]}> */}
      <ScrollView>
        {curNoti.map(idx => (
          <AlertBox data={idx} key={'alert_box' + idx.id} />
        ))}
      </ScrollView>
      {/* </View> */}
    </MainScreen>
  );
};

const mapStateToProps = state => ({
  user: state.login.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: params => dispatch(setUserAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withActionSheet(withTheme(NotificationView)));
