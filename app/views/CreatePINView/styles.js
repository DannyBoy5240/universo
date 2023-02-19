import {StyleSheet} from 'react-native';
import {COLOR_WHITE} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 93,
    height: 48,
    resizeMode: 'contain',
  },
  logoText: {
    width: 275,
    height: 33,
    marginTop: 11,
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
  appText: {
    width: 275,
    marginTop: 14,
    fontFamily: 'Montserrat',
    fontSize: 48,
    fontWeight: '700',
    letterSpacing: 4,
    textAlign: 'center',
    color: '#fff',
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  submitBtn: {
    height: 64,
    borderRadius: 43,
    backgroundI:
      'linear-gradient(104deg, #6c40bd -3%, #1b97c0 67%, #01dfcc 100%)',
  },
  forgotContainer: {
    marginBottom: 10,
  },
  forgotText: {
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontFamily: 'Raleway',
    fontSize: 14,
    lineHeight: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 14,
    marginBottom: 30,
  },
  description: {
    alignItems: 'center',
    marginBottom: 19,
  },
  loginTitle: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: 'HindVadodara-Bold',
  },
  loginText: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    lineHeight: 24,
    color: '#fff',
  },
  registerText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1.4,
    textAlign: 'center',
    color: '#fff',
  },
  registerButton: {
    height: 64,
  },
  digitBox: {
    width: 42,
    headerContainer: 58,
    borderWidth: 1,
    borderRadius: 12,
    fontFamily: 'Montserrat',
    fontSize: 27,
    fontWeight: '700',
    textAlign: 'center',
  },
});
