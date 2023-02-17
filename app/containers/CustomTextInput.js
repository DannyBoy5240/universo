import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native';

import {
  COLOR_INPUT_BORDER,
  COLOR_GRAY_DARK,
  COLOR_LIGHT_DARK,
  COLOR_WHITE,
  COLOR_RED,
  themes,
} from '../constants/colors';
import images from '../assets/images';
import Styles from '../views/Styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  iconWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  textInput: {
    flex: 1,
    paddingVertical: 20,
    fontSize: 16,
    lineHeight: 21,
  },
  error: {
    fontFamily: 'Raleway',
    fontSize: 14,
    lineHeight: 16,
    color: COLOR_RED,
    marginTop: 4,
  },
  container: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  labelText: {
    fontFamily: 'Raleway',
    marginBottom: 8,
    marginLeft: 0,
    fontSize: 14,
    lineHeight: 16,
  },
  eyeSlashIcon: {
    width: 24,
    height: 24,
  },
});

const CustomTextInput = props => {
  const {
    label,
    required,
    error,
    loading,
    secureTextEntry,
    containerStyle,
    inputRef,
    iconLeft,
    iconRight,
    inputStyle,
    wrapStyle,
    testID,
    placeholder,
    theme,
    outlineColor,
    backgroundColor,
    multiline,
    value,
    ...inputProps
  } = props;

  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  return (
    <View style={{marginBottom: 25}}>
      <View
        style={[
          styles.container,
          {
            borderColor: error ? COLOR_RED : themes[theme].borderColor,
            borderRadius: 25,
          },
        ]}>
        <TextInput
          ref={inputRef}
          value={value}
          style={[
            styles.textInput,
            {
              backgroundColor: 'transparent',
              color: COLOR_WHITE,
            },
          ]}
          outlineColor={error ? COLOR_RED : outlineColor || COLOR_INPUT_BORDER}
          activeOutlineColor={error ? COLOR_RED : COLOR_WHITE}
          theme={{
            colors: {
              text: error ? COLOR_RED : COLOR_WHITE,
            },
          }}
          secureTextEntry={!showPassword}
          placeholder={placeholder}
          placeholderTextColor={themes[theme].subTextColor}
          {...inputProps}
        />
        {iconRight === 'passwordShow' ? (
          <Image source={images.eye_slash} style={styles.eyeSlashIcon} />
        ) : (
          <></>
        )}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

CustomTextInput.defaultProps = {
  error: '',
};

export default CustomTextInput;
