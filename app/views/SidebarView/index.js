import React, {useEffect} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Linking,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {connect} from 'react-redux';

import {
  COLOR_YELLOW,
  COLOR_BLACK,
  COLOR_WHITE,
  themes,
} from '../../constants/colors';
import StatusBar from '../../containers/StatusBar';
import {withTheme} from '../../theme';
import styles from './styles';
import images from '../../assets/images';
import SidebarItem from './SidebarItem';
import scrollPersistTaps from '../../utils/scrollPersistTaps';
import {logout as logoutAction} from '../../actions/login';
import {showConfirmationAlert} from '../../lib/info';
import {GradientHeader} from '../../containers/GradientHeader';
import I18n from '../../i18n';
import {SITE_SHOP_URL} from '../../constants/app';
import {VectorIcon} from '../../containers/VectorIcon';
import OptionCardBtn from '../../containers/OptionCardBtn';

import LinearGradient from 'react-native-linear-gradient';

const SidebarView = props => {
  const {user, theme, navigation} = props;
  const menus = [
    {
      id: 'shop_market',
      name: 'Shop Market',
      subItems: ['Buy investments', 'Buy Blockchain', 'Buy Products'],
    },
    {
      id: 'transactions',
      name: 'Transactions',
    },
    {
      id: 'hayek',
      name: 'Hayek',
      subItems: ['Emissions', 'Distribution'],
    },
    {
      id: 'my_team',
      name: 'My team',
      subItems: ['Sponsor', 'Ranks', 'Direct/Indirect Sale', 'Statistics'],
    },
    {
      id: 'my_data',
      name: 'My data',
      subItems: ['Edit PIN', 'Edit My Information', 'Edit Wallet'],
      icon: '',
      route: '',
      routes: [''],
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      title: 'VIP Billionaires',
      headerBackground: () => <GradientHeader />,
    });
  }, []);

  const onClick = item => {
    switch (item.id) {
      // case 'terms_of_use':
      //   return onNavigate('About', { type: 0 })
      case 'privacy_and_settings':
        return onNavigate('MenuStack');
      // case 'eula':
      //   return onNavigate('About', { type: 2 })
      case 'shop':
        return Linking.openURL(SITE_SHOP_URL);
      case 'help_and_support':
        return onNavigate('HelpAndSupport');
      case 'MyConnections':
        return onNavigate('MyConnections');
      case 'vip_members':
        return onNavigate('');
      default:
        onNavigate(item.route, {type: item.init});
    }
  };

  const onNavigate = (routeName, params) => {
    const {navigation} = props;
    navigation.navigate(routeName, params);
  };

  const onLogOut = () => {
    const {logout} = props;
    showConfirmationAlert({
      title: I18n.t('Logout'),
      message: I18n.t('are_you_sure_to_log_out'),
      callToAction: I18n.t('Confirm'),
      onPress: () => {
        if (global.unSubscribeRoom) {
          global.unSubscribeRoom();
          global.unSubscribeRoom = undefined;
        }
        logout();
      },
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLOR_WHITE,
      }}>
      <StatusBar />
      <View style={styles.headerContainer}>
        <View style={styles.profileInnerContainer}>
          <LinearGradient
            colors={['#6c40bd', '#1b97c0', '#01dfcc']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            locations={[0, 0.67, 1]}
            style={{
              padding: 18,
              borderRadius: 30,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={[styles.avatarBox, {backgroundColor: COLOR_BLACK}]}>
              <Image source={images.ico_people} style={styles.avatar} />
            </View>
            <View style={{marginLeft: 12}}>
              <Text style={[styles.profileName, {color: COLOR_WHITE}]}>
                REFERIDOS
              </Text>
              <Text style={[styles.roleName, {color: COLOR_WHITE}]}>
                Comparti tu enlace de referidos a quien desees!
              </Text>
            </View>
            <View style={{marginLeft: 12}}>
              <Text style={[styles.profileName, {color: COLOR_WHITE}]}>+</Text>
            </View>
          </LinearGradient>
        </View>
        <Pressable
          onPress={() => navigation.closeDrawer()}
          style={styles.closeIconAndText}>
          <VectorIcon
            type="AntDesign"
            name="arrowleft"
            size={20}
            color={COLOR_BLACK}
            style={styles.closeIcon}
          />
        </Pressable>
      </View>
      <ScrollView
        style={{
          flexGrow: 1,
          backgroundColor: COLOR_WHITE,
          paddingHorizontal: 16,
        }}
        {...scrollPersistTaps}>
        <Text style={[styles.menuText, {COLOR_BLACK}]}>Home</Text>
        {menus.map(m => (
          <SidebarItem
            key={m.id}
            id={`sidebar-view-key-${m.id}`}
            text={m.name}
            hasRight
            containerStyle={styles.menu}
            onPress={() => onClick(m)}
            theme={theme}
          />
        ))}
      </ScrollView>
      <TouchableOpacity onPress={onLogOut} style={[styles.logoutBtn]}>
        <VectorIcon
          name={'logout-variant'}
          type={'MaterialCommunityIcons'}
          size={24}
          style={{color: COLOR_BLACK}}
        />
        <Text style={[styles.logoutText, {color: COLOR_BLACK}]}>
          {I18n.t('Logout').toUpperCase()}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  user: state.login.user,
});

const mapDispatchToProps = dispatch => ({
  logout: params => dispatch(logoutAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(SidebarView));
