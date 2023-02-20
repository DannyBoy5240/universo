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
import {COLOR_WHITE} from '../../constants/colors';
import styles from './styles';

import LinearGradient from 'react-native-linear-gradient';

const NavButton = ({name}) => {
  return (
    <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 10}}>
      <LinearGradient
        colors={['rgba(246, 246, 246, 0.61) 0', 'rgba(250, 250, 250, 0) 1']}
        style={styles.btnBox}>
        <View>
          <Image source={images.add_back} style={styles.btnAvatarBack} />
          <Image source={images.ico_octagon} style={styles.btnAvatar} />
        </View>
        <Text style={[styles.btnText, {color: COLOR_WHITE}]}>{name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default NavButton;
