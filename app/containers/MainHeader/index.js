import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-paper';

import styles from './style';
import {useTheme} from '../../theme';
import images from '../../assets/images';
import {VectorIcon} from '../VectorIcon';
import {useNavigation} from '@react-navigation/native';
import {COLOR_WHITE, themes} from '../../constants/colors';

const MainHeader = ({avatarImage, onChangeText, ...otherInputProps}) => {
  const {theme} = useTheme();

  const [showSearchIcon, setShowSearchIcon] = useState(true);

  const inputRef = useRef();
  const navigation = useNavigation();

  const focusInput = () => {
    setShowSearchIcon(false);
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };

  const clearInputFocus = () => {
    inputRef.current.clear();
    setTimeout(() => {
      setShowSearchIcon(true);
    }, 100);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <VectorIcon
          type="MaterialCommunityIcons"
          name="menu"
          color={themes[theme].titleColor}
          size={24}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <VectorIcon
          type="Ionicons"
          name="notifications"
          color={COLOR_WHITE}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
