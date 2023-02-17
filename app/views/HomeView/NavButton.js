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

const NavButton = ({name}) => {
  return (
    <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 10}}>
      <ImageBackground source={images.nav_btn_back} style={styles.btnBox}>
        <View>
          <Image source={images.add_back} style={styles.btnAvatarBack} />
          <Image source={images.ico_octagon} style={styles.btnAvatar} />
        </View>
        <Text style={[styles.btnText, {color: COLOR_WHITE}]}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default NavButton;
