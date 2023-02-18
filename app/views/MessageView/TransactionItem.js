import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import images from '../../assets/images';
import styles from './styles';
import {COLOR_WHITE, COLOR_BLACK} from '../../constants/colors';
import {VectorIcon} from '../../containers/VectorIcon';

import LinearGradient from 'react-native-linear-gradient';

const TransactionItem = ({data}) => {
  return (
    <View style={{paddingHorizontal: 28, paddingVertical: 9}}>
      <TouchableOpacity
        style={[styles.TransactionItemBox, {backgroundColor: COLOR_BLACK}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <LinearGradient
              colors={
                data.id % 3 == 1
                  ? ['#52e8d9', '#2ca7a1']
                  : data.id % 3 == 2
                  ? ['rgba(209, 166, 255, 0.87)', '#a857ff']
                  : ['#3c53d7', '#3c53d7']
              }
              style={[styles.TransactionItemAvatarBox]}>
              <Image
                source={images.ico_wallet_white}
                style={styles.btnAvatar}
              />
            </LinearGradient>
          </View>
          <View>
            <Text style={[styles.TransactionItemBoxText, {color: COLOR_WHITE}]}>
              {data.title}
            </Text>
            <Text
              style={[styles.TransactionItemDateText, {color: COLOR_WHITE}]}>
              {data.date}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.moreBtn,
            {borderColor: COLOR_WHITE, backgroundCOlor: '#ff0000'},
          ]}>
          <VectorIcon
            type="AntDesign"
            name="caretright"
            size={18}
            color={COLOR_WHITE}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionItem;