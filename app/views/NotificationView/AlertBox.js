import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import I18n from '../../i18n';
import images from '../../assets/images';
import {COLOR_WHITE, COLOR_BLACK} from '../../constants/colors';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';

const AlertBox = ({data}) => {
  return (
    <View style={styles.alertContainer} key={'alertContaienr' + data.id}>
      <LinearGradient
        colors={['#fafafa', 'rgba(246, 246, 246, 0)']}
        style={{borderRadius: 12}}>
        <View style={{paddingHorizontal: 20, paddingVertical: 7}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.titleText, {color: '#88fff3'}]}>AAA</Text>
            <Image source={images.ico_close} style={styles.closeBtn} />
          </View>
          <Text style={[styles.subTitleText, {color: COLOR_WHITE}]}>
            {data.subTitle}
          </Text>
          <Text style={[styles.contentText, {color: COLOR_WHITE}]}>
            {data.text}
          </Text>
          <TouchableOpacity>
            <Text
              style={[styles.viewMoreText, {color: COLOR_WHITE}]}
              textDecorationLine="underline"
              textDecorationColor={COLOR_WHITE}
              textDecorationStyle="solid"
              textDecorationThickness={1}>
              View mas
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default AlertBox;
