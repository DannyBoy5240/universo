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

const BuyButton = ({name}) => {
  return (
    <TouchableOpacity style={{paddingHorizontal: 8, paddingVertical: 8}}>
      <View style={{borderRadius: 29}}>
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
      </View>
    </TouchableOpacity>
  );
};

export default BuyButton;
