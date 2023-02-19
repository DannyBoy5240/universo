import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {VectorIcon} from '../../containers/VectorIcon';

import styles from './styles';
import {COLOR_BLACK, themes} from '../../constants/colors';

const Item = React.memo(
  ({id, left, text, onPress, textStyle, theme, hasRight}) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        key={id}
        style={styles.container}
        onPress={() => navigation.push('CreatePIN')}>
        <View style={styles.item}>
          {left && <View style={styles.itemLeft}>{left}</View>}
          <View style={styles.itemCenter}>
            <Text style={[styles.itemText, {color: COLOR_BLACK, ...textStyle}]}>
              {text}
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
    );
  },
);

export default Item;
