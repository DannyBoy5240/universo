import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import I18n from '../../i18n';
import images from '../../assets/images';
import {COLOR_WHITE, COLOR_ULTRAMARINE} from '../../constants/colors';
import styles from './styles';

const BalanceDetail = ({}) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image source={images.ico_atomo} style={styles.avatarIcon} />
        <Text style={[styles.balanceText, {color: COLOR_WHITE}]}>
          <Text style={{fontWeight: '800'}}>Atomo</Text> Balanace
        </Text>
      </View>

      <View style={{borderRadius: 13, alignItems: 'center'}}>
        <View style={[styles.balancePriceBox, {backgroundColor: COLOR_WHITE}]}>
          <Text style={[styles.balancePriceText, {color: '#141436'}]}>
            $000.000
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BalanceDetail;
