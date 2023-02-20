import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import images from '../../assets/images';
import styles from './styles';
import {COLOR_WHITE, COLOR_BLACK} from '../../constants/colors';
import {VectorIcon} from '../../containers/VectorIcon';

import LinearGradient from 'react-native-linear-gradient';

const PriceItem = ({data}) => {
  return (
    <View style={styles.priceContainer}>
      <LinearGradient
        colors={['#ffffff', 'rgba(255, 252, 252, 0.88)']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.priceBox}>
        <View
          style={[
            styles.itemBox,
            {borderRightWidth: 0.6, borderBottomWidth: 0.6},
          ]}>
          <Text style={[styles.titleText, {color: '#6c727f'}]}>Issue</Text>
          <Text style={[styles.valueText, {color: COLOR_BLACK}]}>
            {data.issue}
          </Text>
        </View>
        <View style={[styles.itemBox, {borderBottomWidth: 0.6}]}>
          <Text style={[styles.titleText, {color: '#6c727f'}]}>Amount</Text>
          <Text style={[styles.valueText, {color: COLOR_BLACK}]}>
            {data.amount}
          </Text>
        </View>
        <View style={[styles.itemBox, {borderRightWidth: 0.6}]}>
          <Text style={[styles.titleText, {color: '#6c727f'}]}>Price</Text>
          <Text style={[styles.valueText, {color: COLOR_BLACK}]}>
            {data.price}
          </Text>
        </View>
        <View style={[styles.itemBox]}>
          <Text style={[styles.titleText, {color: '#6c727f'}]}>
            Existencias
          </Text>
          <Text style={[styles.valueText, {color: COLOR_BLACK}]}>
            {data.existance}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default PriceItem;
