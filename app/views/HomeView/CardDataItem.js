import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import I18n from '../../i18n';
import images from '../../assets/images';
import {COLOR_WHITE, COLOR_BLACK} from '../../constants/colors';
import styles from './styles';
import {VectorIcon} from '../../containers/VectorIcon';

import LinearGradient from 'react-native-linear-gradient';

const CardDataItem = ({name}) => {
  return (
    <LinearGradient
      colors={['#7470ba', '#06042e']}
      style={styles.cardContainer}>
      <View style={styles.cardBox}>
        <Image source={images.test_pic} style={styles.cardPic} />
        <View style={styles.cardInfo}>
          <Text style={[styles.cardInfoText, {color: COLOR_WHITE}]}>
            Lorem Ipsum is simply
          </Text>
          <TouchableOpacity
            style={[
              styles.cardInfoBtn,
              {color: COLOR_WHITE, borderColor: COLOR_WHITE},
            ]}>
            <Text style={[styles.cardInfoBtnText, {color: COLOR_WHITE}]}>
              button
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CardDataItem;
