import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import I18n from '../../i18n';
import images from '../../assets/images';
import styles from './styles';
import {COLOR_WHITE, COLOR_ULTRAMARINE} from '../../constants/colors';

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
        <LinearGradient
          colors={['#ffffff', '#bebbe5']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={[styles.balancePriceBox, {borderRadius: 13}]}>
          <Text style={[styles.balancePriceText, {color: '#141436'}]}>
            $000.000
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default BalanceDetail;
