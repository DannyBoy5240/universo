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
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {setUser as setUserAction} from '../../actions/login';
import ActivityIndicator from '../../containers/ActivityIndicator';
import scrollPersistTaps from '../../utils/scrollPersistTaps';
import {withActionSheet} from '../../containers/ActionSheet';

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
import ProductItem from './ProductItem';

const MarketView = props => {
  const searchInput = useRef(null);
  const [searchText, setSearchText] = useState('');
  const tabBarHeight = useBottomTabBarHeight();

  const tData = [
    {
      id: 1,
      title: 'Product1',
      price: '$000.000',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      title: 'Product2',
      price: '$000.000',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      title: 'Product3',
      price: '$000.000',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 4,
      title: 'Product4',
      price: '$000.000',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  const RenderFlatListItem = ({data, type}) => {
    if (data.length > 0) {
      return (
        <ScrollView>
          {data.map(idx => (
            <ProductItem data={idx} key={'ti' + idx.id} />
          ))}
        </ScrollView>
      );
    } else {
      return <></>;
    }
  };

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'All'},
    {key: 'second', title: 'Blockchain'},
    {key: 'third', title: 'Products'},
    {key: 'firth', title: 'Investments'},
  ]);

  const renderScene = SceneMap({
    first: () => <RenderFlatListItem type={'all'} data={tData} />,
    second: () => <RenderFlatListItem type={'blockchain'} data={tData} />,
    third: () => <RenderFlatListItem type={'products'} data={tData} />,
    firth: () => <RenderFlatListItem type={'investment'} data={tData} />,
  });
  const renderTabBar = props => {
    return (
      <View style={[styles.tabBarContainer]}>
        <View style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => setIndex(i)}>
                {i == index ? (
                  <LinearGradient
                    colors={['#6da0ee', '#a755ff']}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}
                    style={styles.tabItem}>
                    <Text style={[styles.tabText, {color: COLOR_WHITE}]}>
                      {route.title}
                    </Text>
                  </LinearGradient>
                ) : (
                  <View>
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
      <View style={styles.notificationBox}>
        <Text style={[styles.notificationText, {color: COLOR_WHITE}]}>
          Shop Market
        </Text>
        <LinearGradient
          colors={['#8d8be5', '#3c3ca0']}
          style={{borderRadius: 12, opacity: 0.3}}>
          <View style={[styles.searchBox]}>
            <Image source={images.ico_search} style={styles.searchBtn} />
            <TextInput
              inputRef={searchInput}
              iconLeft={images.ico_search}
              returnKeyType="search"
              keyboardType="searchContent"
              textContentType="oneTimeCode"
              label={'search'}
              placeholder={'Input your item key'}
              placeholderTextColor={'#aaa'}
              onChangeText={val => setSearchText(val)}
              style={{marginLeft: 10, color: COLOR_WHITE}}
            />
          </View>
        </LinearGradient>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        initialLayout={{width: layout.width}}
        onIndexChange={setIndex}
        style={{
          backgroundColor: COLOR_ULTRAMARINE,
          paddingBottom: tabBarHeight,
        }}
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
)(withActionSheet(withTheme(MarketView)));
