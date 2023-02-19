import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import {withTheme} from '../../theme';
import sharedStyles from '../Styles';
import styles from './styles';
import images from '../../assets/images';
import {COLOR_WHITE, COLOR_YELLOW} from '../../constants/colors';

import scrollPersistTaps from '../../utils/scrollPersistTaps';
import {CURRENT_USER} from '../../constants/keys';
import {appStart as appStartAction} from '../../actions/app';

import StatusBar from '../../containers/StatusBar';
import KeyboardView from '../../containers/KeyboardView';

const CreatePINView = props => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <ImageBackground style={styles.container} source={images.background}>
        <StatusBar />
        <KeyboardView
          style={sharedStyles.container}
          keyboardVerticalOffset={128}>
          <ScrollView
            style={{flex: 1, height: '100%'}}
            {...scrollPersistTaps}
            keyboardShouldPersistTaps="handled">
            <View style={sharedStyles.headerContainer}>
              <Image style={styles.logo} source={images.logo} />
              <Text style={styles.logoText}>OFFICE</Text>
              <Text style={styles.appText}>universo</Text>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.description}>
                <Text style={styles.loginText}>
                  Create a <Text style={{fontWeight: '700'}}>6-digit code</Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                {new Array(6).fill(null).map((_, index) => (
                  <TextInput
                    key={'ti' + index}
                    style={[
                      styles.digitBox,
                      {borderColor: COLOR_WHITE, color: COLOR_WHITE},
                    ]}></TextInput>
                ))}
              </View>
            </View>
          </ScrollView>
        </KeyboardView>

        <LinearGradient
          colors={['#6c40bd', '#1b97c0', '#01dfcc']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0, 0.67, 1]}
          style={{
            marginHorizontal: 20,
            marginBottom: 30,
            borderRadius: 43,
          }}>
          <TouchableOpacity style={styles.registerButton}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.registerText}>CONTINUE</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  loginSuccess: params => dispatch(loginSuccessAction(params)),
  appStart: params => dispatch(appStartAction(params)),
});

export default connect(null, mapDispatchToProps)(withTheme(CreatePINView));
