import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import I18n from '../../i18n';
import images from '../../assets/images';
import {COLOR_WHITE} from '../../constants/colors';
import styles from './styles';

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

      <View style={styles.followWrap}>
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
          <Text style={[styles.optionValue, {color: COLOR_WHITE}]}>$000</Text>
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
          <Text style={[styles.optionValue, {color: COLOR_WHITE}]}>$000</Text>
        </View>
        <View style={styles.optionContainer}>
          <Text style={[styles.optionTitle, {color: COLOR_WHITE}]}>
            BALANCE
          </Text>
          <Text style={[styles.optionValue, {color: COLOR_WHITE}]}>$000</Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceDetail;
