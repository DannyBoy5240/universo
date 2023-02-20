import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import I18n from '../../i18n';
import images from '../../assets/images';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_ULTRAMARINE,
} from '../../constants/colors';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';

const AlertBox = ({data}) => {
  return (
    <View style={styles.alertContainer} key={'alertContaienr' + data.id}>
      <LinearGradient
        colors={['#ffffffff', 'rgba(255, 255, 255, 0.18)']}
        style={{
          paddingHorizontal: 1,
          paddingVertical: 1,
          borderRadius: 12,
        }}>
        <View style={{backgroundColor: COLOR_ULTRAMARINE, borderRadius: 12}}>
          <LinearGradient
            colors={['#ffffff00', 'rgba(255, 255, 255, 0.18)']}
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            style={{borderRadius: 12}}>
            <View style={{paddingHorizontal: 20, paddingVertical: 13}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={[styles.titleText, {color: '#88fff3'}]}>
                  {data.title}
                </Text>
                <TouchableOpacity>
                  <Image source={images.ico_close} style={styles.closeBtn} />
                </TouchableOpacity>
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
      </LinearGradient>
    </View>
  );
};

export default AlertBox;
