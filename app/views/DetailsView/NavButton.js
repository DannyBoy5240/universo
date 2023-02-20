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
import {COLOR_WHITE, COLOR_ULTRAMARINE} from '../../constants/colors';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';

const NavButton = ({name}) => {
  return (
    <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 10}}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.61)', 'rgba(255, 255, 255, 0.05)']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={{paddingHorizontal: 2, paddingVertical: 2, borderRadius: 29}}>
        <View
          style={{
            backgroundColor: COLOR_ULTRAMARINE,
            borderRadius: 29,
          }}>
          <LinearGradient
            colors={['#fafafa00', 'rgba(246, 246, 246, 0.15)']}
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            style={styles.btnBox}>
            <View>
              <Image source={images.add_back} style={styles.btnAvatarBack} />
              <Image source={images.ico_octagon} style={styles.btnAvatar} />
            </View>
            <Text style={[styles.btnText, {color: COLOR_WHITE}]}>{name}</Text>
          </LinearGradient>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default NavButton;
