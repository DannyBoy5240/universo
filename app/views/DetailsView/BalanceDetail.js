import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import I18n from '../../i18n';
import images from '../../assets/images';
import {COLOR_WHITE, COLOR_ULTRAMARINE} from '../../constants/colors';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';

const BalanceDetail = ({}) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image source={images.ico_atomo} style={styles.avatarIcon} />
        <Text style={[styles.rankText, {color: COLOR_WHITE}]}>
          MY CURRENT RANK
        </Text>
        <Text style={[styles.balanceText, {color: COLOR_WHITE}]}>
          <Text style={{fontWeight: '800'}}>Atomo</Text> Balanace
        </Text>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <LinearGradient
          colors={['#ffffff', 'rgba(255, 255, 255, 0)']}
          style={{borderRadius: 29, paddingHorizontal: 1, paddingVertical: 1}}>
          <View style={{backgroundColor: COLOR_ULTRAMARINE, borderRadius: 29}}>
            <LinearGradient
              colors={['rgba(246, 246, 246, 0.46)', '#fafafa88']}
              style={styles.followWrap}>
              {/* <RadialGradient
            style={{flex: 1}}
            colors={['#F00', '#0F0']}
            stops={[0.1, 0.9]}
            center={[150, 150]}
            radius={200}> */}
              <View
                style={[
                  styles.optionContainer,
                  {
                    borderRightWidth: 1,
                    borderRightColor: COLOR_WHITE,
                  },
                ]}>
                <Text style={[styles.optionTitle, {color: COLOR_WHITE}]}>
                  BILLING
                </Text>
                <Text style={[styles.optionValue, {color: COLOR_WHITE}]}>
                  $000
                </Text>
              </View>
              <View
                style={[
                  styles.optionContainer,
                  {
                    borderRightWidth: 1,
                    borderRightColor: COLOR_WHITE,
                  },
                ]}>
                <Text style={[styles.optionTitle, {color: COLOR_WHITE}]}>
                  MY SALES
                </Text>
                <Text style={[styles.optionValue, {color: COLOR_WHITE}]}>
                  $000
                </Text>
              </View>
              <View style={styles.optionContainer}>
                <Text style={[styles.optionTitle, {color: COLOR_WHITE}]}>
                  BALANCE
                </Text>
                <Text style={[styles.optionValue, {color: COLOR_WHITE}]}>
                  $000
                </Text>
              </View>
              {/* </RadialGradient> */}
            </LinearGradient>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default BalanceDetail;
