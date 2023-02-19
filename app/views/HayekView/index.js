import React, {useState, useEffect, useRef} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableHighlight,
  useWindowDimensions,
} from 'react-native';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {TabView, SceneMap} from 'react-native-tab-view';

import {setUser as setUserAction} from '../../actions/login';
import ActivityIndicator from '../../containers/ActivityIndicator';
import scrollPersistTaps from '../../utils/scrollPersistTaps';
import {withActionSheet} from '../../containers/ActionSheet';
import {VectorIcon} from '../../containers/VectorIcon';

import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_ULTRAMARINE,
  COLOR_DARKBLACK,
} from '../../constants/colors';
import {withTheme} from '../../theme';
import images from '../../assets/images';
import styles from './styles';

import StatusBar from '../../containers/StatusBar';
import MainHeader from '../../containers/MainHeader';
import MainScreen from '../../containers/MainScreen';
import PriceItem from './PriceItem';

const HayekView = props => {
  const searchInput = useRef(null);
  const [searchText, setSearchText] = useState('');

  const tData = [
    {
      id: 1,
      issue: 10,
      amount: 20000,
      price: 224.1,
      existance: 224.1,
    },
    {
      id: 2,
      issue: 10,
      amount: 20000,
      price: 224.1,
      existance: 224.1,
    },
    {
      id: 3,
      issue: 10,
      amount: 20000,
      price: 224.1,
      existance: 224.1,
    },
    {
      id: 4,
      issue: 10,
      amount: 20000,
      price: 224.1,
      existance: 224.1,
    },
  ];

  const RenderFlatListItem = ({data, type}) => {
    if (data.length > 0) {
      return (
        <View>
          {data.map(idx => (
            <PriceItem data={idx} key={'ti' + idx.id} />
          ))}
        </View>
      );
    } else {
      return <></>;
    }
  };

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Emissions'},
    {key: 'second', title: 'Distribution'},
  ]);

  const renderScene = SceneMap({
    first: () => <RenderFlatListItem type={'emissions'} data={tData} />,
    second: () => <RenderFlatListItem type={'distribution'} data={tData} />,
  });
  const renderTabBar = props => {
    return (
      <View style={[styles.tabBarContainer]}>
        <View style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => setIndex(i)}
                style={{width: '50%', paddingHorizontal: 4}}>
                {i == index ? (
                  <LinearGradient
                    colors={['#a755ff', '#6da0ee']}
                    style={styles.tabItem}>
                    <Text style={[styles.tabText, {color: COLOR_WHITE}]}>
                      {route.title}
                    </Text>
                  </LinearGradient>
                ) : (
                  <View
                    style={[styles.tabItemNone, {borderColor: COLOR_WHITE}]}>
                    <Text style={[styles.tabText, {color: COLOR_WHITE}]}>
                      {route.title}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <MainScreen style={{backgroundColor: COLOR_DARKBLACK}}>
      <StatusBar />
      <MainHeader />
      <View style={styles.summaryBoxContainer}>
        <LinearGradient
          colors={['rgba(132, 44, 191, 0.35)', '#f2e9f9']}
          style={styles.summaryBox}>
          <View style={styles.summaryBoxMain}>
            <View
              style={[styles.summaryIconBox, {backgroundColor: COLOR_WHITE}]}>
              <Image source={images.test_pic} style={styles.summaryIcon} />
            </View>
            <View style={{marginLeft: 10}}>
              <Text
                style={[
                  styles.summaryTitle,
                  {
                    color: COLOR_WHITE,
                    borderBottomWidth: 1,
                    borderBottomColor: COLOR_WHITE,
                  },
                ]}>
                Hayek
              </Text>
              <Text
                style={[styles.summaryTokenDescription, {color: COLOR_WHITE}]}>
                Remaining Tokens
              </Text>
              <Text style={[styles.summaryTokenPrice, {color: COLOR_WHITE}]}>
                $87,430.12
              </Text>
            </View>
          </View>
          <VectorIcon
            type="Ionicons"
            name="add"
            color={COLOR_WHITE}
            size={17}
          />
        </LinearGradient>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        initialLayout={{width: layout.width}}
        onIndexChange={setIndex}
        style={{backgroundColor: COLOR_ULTRAMARINE}}
      />
    </MainScreen>
  );
};

const mapStateToProps = state => ({
  user: state.login.user,
});

const mapDispatchToProps = dispatch => ({
  setUser: params => dispatch(setUserAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withActionSheet(withTheme(HayekView)));
