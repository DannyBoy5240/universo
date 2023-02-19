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
      <View
        style={[
          styles.priceBox,
          {backgroundColor: COLOR_WHITE, opacity: 0.95},
        ]}>
        <View
          style={[
            styles.itemBox,
            {borderRightWidth: 0.6, borderBottomWidth: 0.6},
          ]}>
          <Text style={[styles.titleText, {color: '#6c727f'}]}>Issue</Text>
          <Text style={[styles.valueText, {color: COLOR_BLACK}]}>
            {data.price}
          </Text>
        </View>
        <View style={[styles.itemBox, {borderBottomWidth: 0.6}]}>
          <Text style={[styles.titleText, {color: '#6c727f'}]}>Issue</Text>
          <Text style={[styles.valueText, {color: COLOR_BLACK}]}>
            {data.price}
          </Text>
        </View>
        <View style={[styles.itemBox, {borderRightWidth: 0.6}]}>
          <Text style={[styles.titleText, {color: '#6c727f'}]}>Issue</Text>
          <Text style={[styles.valueText, {color: COLOR_BLACK}]}>
            {data.price}
          </Text>
        </View>
        <View style={[styles.itemBox]}>
          <Text style={[styles.titleText, {color: '#6c727f'}]}>Issue</Text>
          <Text style={[styles.valueText, {color: COLOR_BLACK}]}>
            {data.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PriceItem;
