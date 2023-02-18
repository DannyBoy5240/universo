import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import I18n from '../../i18n';
import images from '../../assets/images';
import {COLOR_WHITE, COLOR_BLACK} from '../../constants/colors';
import styles from './styles';
import {VectorIcon} from '../../containers/VectorIcon';

const RecentActivity = ({name}) => {
  return (
    <View style={{paddingHorizontal: 28}}>
      <Text style={[styles.recentActivityText, {color: COLOR_WHITE}]}>
        Recent Activities
      </Text>
      <TouchableOpacity
        style={[styles.recentActivityBox, {backgroundColor: COLOR_BLACK}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[
              styles.recentActivityAvatarBox,
              {backgroundColor: '#ff0000'},
            ]}>
            <Image source={images.ico_wallet_white} style={styles.btnAvatar} />
          </View>
          <Text style={[styles.recentActivityBoxText, {color: COLOR_WHITE}]}>
            Hayek Earnings
          </Text>
        </View>
        <View style={[styles.moreActivityBtn, {borderColor: COLOR_WHITE}]}>
          <VectorIcon
            type="AntDesign"
            name="caretright"
            size={18}
            color={COLOR_WHITE}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecentActivity;
