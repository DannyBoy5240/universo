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

import {COLOR_WHITE, COLOR_BLACK, themes} from '../../constants/colors';
import StatusBar from '../../containers/StatusBar';
import {withTheme} from '../../theme';
import images from '../../assets/images';
import styles from './styles';
import {setUser as setUserAction} from '../../actions/login';
import ActivityIndicator from '../../containers/ActivityIndicator';
import {showErrorAlert, showToast} from '../../lib/info';
import {VectorIcon} from '../../containers/VectorIcon';
import scrollPersistTaps from '../../utils/scrollPersistTaps';
import I18n from '../../i18n';
import {withActionSheet} from '../../containers/ActionSheet';
import MainHeader from '../../containers/MainHeader';

import AlertBox from './AlertBox';

const ProfileView = props => {
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
      title: 'T3 FEB',
      subTitle: 'Lorem Ipsum dolor sit',
      text: 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit ipsum dolor sit amet, conse ctetuer adipiscing’',
    },
  ];
  const currentDate = 13;

  return (
    <View style={{backgroundColor: '#02010c'}}>
      <StatusBar />
      <MainHeader />
      <ScrollView>
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
        <View styles={[styles.alertBoxContainer]}>
          <View style={[styles.alertBoxBox]}>
            {curNoti.map(idx => (
              <AlertBox data={idx} key={'alert_box' + idx.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
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
)(withActionSheet(withTheme(ProfileView)));
