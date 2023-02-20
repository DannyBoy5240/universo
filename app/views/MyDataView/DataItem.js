import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

import images from '../../assets/images';
import styles from './styles';
import {COLOR_WHITE, COLOR_BLACK} from '../../constants/colors';
import {VectorIcon} from '../../containers/VectorIcon';

import LinearGradient from 'react-native-linear-gradient';

const DataItem = ({data}) => {
  const navigation = useNavigation();

  const gotoPages = title => {
    if (title === 'Edit PIN') navigation.navigate('CreatePIN');
  };

  return (
    <View style={{paddingHorizontal: 28, paddingVertical: 9}}>
      <TouchableOpacity
        style={[styles.DataItemBox, {backgroundColor: COLOR_BLACK}]}
        onPress={() => gotoPages(data.title)}>
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
              style={[styles.DataItemAvatarBox]}>
              <Image
                source={images.ico_wallet_white}
                style={styles.btnAvatar}
              />
            </LinearGradient>
          </View>
          <Text style={[styles.DataItemBoxText, {color: COLOR_WHITE}]}>
            {data.title}
          </Text>
        </View>
        <View
          style={[
            styles.moreBtn,
            {borderColor: COLOR_WHITE, backgroundCOlor: '#ff0000'},
          ]}>
          <VectorIcon
            type="AntDesign"
            name="caretright"
            size={14}
            color={COLOR_WHITE}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DataItem;
