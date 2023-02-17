import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {withTheme} from '../../theme';
import StatusBar from '../../containers/StatusBar';
import sharedStyles from '../Styles';
import styles from './styles';
import images from '../../assets/images';
import Button from '../../containers/Button';
import {loginSuccess as loginSuccessAction} from '../../actions/login';
import scrollPersistTaps from '../../utils/scrollPersistTaps';
import {showErrorAlert} from '../../lib/info';
import {isValidEmail} from '../../utils/validators';
import firebaseSdk from '../../lib/firebaseSdk';
import {CURRENT_USER} from '../../constants/keys';
import {appStart as appStartAction} from '../../actions/app';
import I18n from '../../i18n';
import {
  COLOR_SKY,
  COLOR_WHITE,
  COLOR_YELLOW,
  themes,
} from '../../constants/colors';
import CustomTextInput from '../../containers/CustomTextInput';
import KeyboardView from '../../containers/KeyboardView';

import {CheckBox} from 'react-native-elements';

const theme = 'light';

const SignUpView = props => {
  const navigation = useNavigation();
  const {loginSuccess} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [errNickname, seterrNickname] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const nicknameInput = useRef(null);
  const passwordInput = useRef(null);

  const onGoToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const forgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const isValid = () => {
    seterrNickname('');
    setErrPassword('');
    if (!nickname.length) {
      seterrNickname('Please enter Nickname');
      nicknameInput.current.focus();
      return false;
    }
    if (!password.length) {
      setErrPassword('Please enter password');
      passwordInput.current.focus();
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    // if (isValid()) {
    //   setIsLoading(true);
    //   firebaseSdk
    //     .SignUpWithEmail(nickname, password)
    //     .then(async user => {
    //       setIsLoading(false);
    //       await AsyncStorage.setItem(CURRENT_USER, JSON.stringify(user));
    //       loginSuccess(user);
    //     })
    //     .catch(err => {
    //       setIsLoading(false);
    //       if (err.indexOf('auth/user-not-found') > 0) {
    //         showErrorAlert(I18n.t('error-user-not_registered'));
    //       } else if (err.indexOf('auth/wrong-password') > 0) {
    //         showErrorAlert(I18n.t('error-invalid-password'));
    //       } else {
    //         showErrorAlert(I18n.t('error-invalid-user'));
    //       }
    //       console.log('error', err);
    //     });
    // }
  };

  return (
    <SafeAreaView
      style={{flex: 1, flexDirection: 'column', backgroundColor: '#141436'}}>
      <StatusBar />
      <KeyboardView style={sharedStyles.container} keyboardVerticalOffset={128}>
        <ScrollView
          style={{flex: 1, backgroundColor: '#141436', height: '100%'}}
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
                ¡Crea una cuenta para continuar!
              </Text>
            </View>
            <CustomTextInput
              inputRef={nicknameInput}
              returnKeyType="next"
              keyboardType="email-address"
              textContentType="oneTimeCode"
              label={'Nickname'}
              placeholder={'Nickname'}
              theme={theme}
              error={errNickname}
              onChangeText={val => setNickname(val)}
            />
            <CustomTextInput
              inputRef={passwordInput}
              label={'Password'}
              iconRight={'passwordShow'}
              placeholder={'Contraseña'}
              returnKeyType="send"
              textContentType="oneTimeCode"
              theme={theme}
              secureTextEntry
              error={errPassword}
              onChangeText={val => setPassword(val)}
            />
            <View style={styles.forgotContainer}>
              <CheckBox
                title=""
                checked={true}
                // onPress={handleCheckBoxToggle}
              />
              <Text
                style={[
                  styles.infoText,
                  {color: COLOR_WHITE, flexWrap: 'wrap'},
                ]}>
                Acepto los{' '}
                <Text style={{color: COLOR_SKY}}>Términos de servicio</Text> y
                <Text style={{color: COLOR_SKY}}> Política de privacidad</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardView>

      <View style={{flexDirection: 'column'}}>
        <LinearGradient
          colors={['#6c40bd', '#1b97c0', '#01dfcc']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          locations={[0, 0.67, 1]}
          style={{
            marginHorizontal: 20,
            borderRadius: 43,
          }}>
          <TouchableOpacity style={styles.registerButton}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.registerText}>INGRESAR</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.bottomContainer}>
          <Text style={styles.alreadyHaveText}>
            {'Already have an account?'} &nbsp;
          </Text>
          <Text
            style={[
              {color: COLOR_SKY},
              {fontFamily: 'Montserrat', fontSize: 14},
            ]}
            onPress={onGoToSignIn}>
            Sign In
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  loginSuccess: params => dispatch(loginSuccessAction(params)),
  appStart: params => dispatch(appStartAction(params)),
});

export default connect(null, mapDispatchToProps)(withTheme(SignUpView));
