import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import images from '../../assets/images';
import styles from './styles';
import {COLOR_WHITE, COLOR_BLACK} from '../../constants/colors';
import {VectorIcon} from '../../containers/VectorIcon';

import LinearGradient from 'react-native-linear-gradient';

const ProductItem = ({data}) => {
  return (
    <View style={styles.productContainer}>
      <View style={{backgroundColor: COLOR_WHITE, borderRadius: 29}}>
        <View>
          <TouchableOpacity
            style={[styles.priceBtn, {backgroundColor: '#715aee'}]}>
            <VectorIcon
              type="FontAwesome"
              name="diamond"
              size={18}
              color={COLOR_WHITE}
            />
            <Text style={[styles.priceBtnText, {color: COLOR_WHITE}]}>
              {data.price}
            </Text>
          </TouchableOpacity>
          <View style={{height: 190, borderRadius: 29}}>
            <View style={styles.productItemBox}>
              <Image source={images.test_product} style={styles.productItem} />
            </View>
          </View>
        </View>
        <View style={styles.productInfoContainer}>
          <Text style={[styles.titleText, {color: '#1d1838'}]}>
            Title - {data.title}
          </Text>
          <Text style={[styles.descriptionText, {color: COLOR_BLACK}]}>
            {data.description}
          </Text>
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <LinearGradient
              colors={['#614bbe', '#0bc1c7']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.productItemBtn}>
              <Text style={[styles.productItemBtnText, {color: COLOR_WHITE}]}>
                COMPRAR
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
