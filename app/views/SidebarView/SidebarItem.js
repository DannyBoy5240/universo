import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {VectorIcon} from '../../containers/VectorIcon';

import styles from './styles';
import {COLOR_BLACK, themes} from '../../constants/colors';

const Item = React.memo(
  ({id, left, text, onPress, textStyle, theme, hasRight}) => {
    const navigation = useNavigation();

    const gotoPage = name => {
      if (name === 'Hayek') navigation.navigate('Hayek');
      if (name === 'My data') navigation.navigate('MyData');
      if (name === 'Transactions') navigation.navigate('Transaction');
    };

    const gotoSubPage = (item, subName) => {
      if (item.name === 'Hayek') {
        if (subName === 'Emissions')
          navigation.navigate('Hayek', {subProp: subName});
        if (subName === 'Distribution')
          navigation.navigate('Hayek', {subProp: subName});
      }
      if (item.name === 'My data') {
        navigation.navigate('MyData');
      }
    };

    return (
      <View style={styles.subItemContainer}>
        <TouchableOpacity
          key={id}
          style={styles.subItemBox}
          onPress={() => gotoPage(text.name)}>
          <View style={styles.item}>
            {left && <View style={styles.itemLeft}>{left}</View>}
            <View style={styles.itemCenter}>
              <Text
                style={[styles.itemText, {color: COLOR_BLACK, ...textStyle}]}>
                {text.name}
              </Text>
            </View>
          </View>
          {hasRight && (
            <VectorIcon
              type="MaterialCommunityIcons"
              name="chevron-right"
              color={COLOR_BLACK}
              size={24}
            />
          )}
        </TouchableOpacity>
        {true ? (
          <View style={{paddingHorizontal: 10}}>
            {text.subItems?.map(idx => (
              <TouchableOpacity
                style={{flexDirection: 'row', paddingVertical: 8}}
                onPress={() => gotoSubPage(text, idx)}>
                <VectorIcon
                  type={'Entypo'}
                  name={'dot-single'}
                  size={18}
                  color={COLOR_BLACK}
                />
                <Text style={[styles.itemSubText, {color: COLOR_BLACK}]}>
                  {idx}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  },
);

export default Item;
