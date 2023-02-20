import React, {useEffect, useState} from 'react';
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
  const [show, setShow] = useState(0);

  const onLogOut = () => {};

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={['#ffffff', '#d4d3e0']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={{flex: 1}}>
        <StatusBar />
        <View style={[styles.headerContainer, {borderBottomColor: '#5f5dc1'}]}>
          <View style={styles.profileInnerContainer}>
            <LinearGradient
              colors={['#6da0ee', '#a755ff']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
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
            </LinearGradient>
          </View>
          <TouchableOpacity
            onPress={() => navigation.closeDrawer()}
            style={[styles.closeIconAndText, {backgroundColor: COLOR_BLACK}]}>
            <VectorIcon
              type="AntDesign"
              name="arrowleft"
              size={20}
              color={COLOR_WHITE}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            flexGrow: 1,
            paddingHorizontal: 30,
          }}
          {...scrollPersistTaps}>
          <Text style={[styles.menuText, {COLOR_BLACK}]}>Home</Text>
          {menus.map(m => (
            <SidebarItem
              key={m.id}
              id={`sidebar-view-key-${m.id}`}
              text={m}
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
      </LinearGradient>
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
