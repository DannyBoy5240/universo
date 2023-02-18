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
    <View styles={styles.alertContainer} key={'alertContaienr' + data.id}>
      <LinearGradient colors={['#fafafa', 'rgba(246, 246, 246, 0)']}>
        <View styles={{paddingHorizontal: 20}}>
          <View
            styles={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text styles={[styles.titleText, {color: '#88fff3'}]}>
              {data.title}
            </Text>
            <Image source={images.ico_close} style={styles.closeBtn} />
          </View>
          <Text>{data.subTitle}</Text>
          <Text>{data.text}</Text>
          <TouchableOpacity>
            <Text>View mas</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default AlertBox;
