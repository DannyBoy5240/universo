import React, {useRef, useState} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import images from '../../assets/images';
import {COLOR_WHITE, COLOR_BLACK} from '../../constants/colors';
import styles from './styles';

const SearchData = ({}) => {
  const searchInput = useRef(null);
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchContainer}>
      <Text style={[styles.transactionText, {color: COLOR_WHITE}]}>
        My data
      </Text>
      <View>
        <LinearGradient
          colors={['#8d8be5', '#3c3ca0']}
          style={{borderRadius: 12, opacity: 0.3}}>
          <View style={styles.searchBox}>
            <Image source={images.ico_search} style={styles.searchBtn} />
            <TextInput
              inputRef={searchInput}
              iconLeft={images.ico_search}
              returnKeyType="search"
              keyboardType="searchContent"
              textContentType="oneTimeCode"
              label={'search'}
              placeholder={'Input your transaction key'}
              placeholderTextColor={'#aaa'}
              onChangeText={val => setSearchText(val)}
              style={{marginLeft: 10, color: COLOR_WHITE}}
            />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default SearchData;
