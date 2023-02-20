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
import LinearGradient from 'react-native-linear-gradient';

import images from '../../assets/images';
import styles from './styles';
import {COLOR_WHITE, COLOR_BLACK} from '../../constants/colors';

const BuyButton = ({name}) => {
  return (
    <TouchableOpacity style={{paddingHorizontal: 8, paddingVertical: 8}}>
      <LinearGradient
        colors={['#42e8e0ff', 'rgba(255, 239, 252, 0)']}
        style={{
          borderRadius: 29,
          paddingVertical: 0.5,
          paddingHorizontal: 0.5,
        }}>
        <View style={[styles.btnBox, {backgroundColor: COLOR_BLACK}]}>
          {name === 'Buy Investment' ? (
            <Image source={images.ico_invest} style={styles.btnAvatar} />
          ) : name === 'Buy Blockchain' ? (
            <Image source={images.ico_wallet} style={styles.btnAvatar} />
          ) : name === 'Buy Products' ? (
            <Image source={images.ico_bag1} style={styles.btnAvatar} />
          ) : (
            <></>
          )}
          <Text style={[styles.btnText, {color: COLOR_WHITE}]}>{name}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default BuyButton;
