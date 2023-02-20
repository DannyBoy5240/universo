import React, {useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import {
  COLOR_WHITE,
  COLOR_ULTRAMARINE,
  COLOR_DARKBLACK,
} from '../../constants/colors';
import {withTheme} from '../../theme';
import images from '../../assets/images';
import styles from './styles';

import MainScreen from '../../containers/MainScreen';
import StatusBar from '../../containers/StatusBar';
import MainHeader from '../../containers/MainHeader';
import SearchTransaction from './SearchTransaction';
import TransactionItem from './TransactionItem';

const TransactionView = props => {
  const tData = [
    {
      id: 1,
      title: 'Token',
      price: '120',
      date: '15 March 2022 8:20 PM',
    },
    {
      id: 2,
      title: 'Inversion',
      price: '120',
      date: '15 March 2022 8:20 PM',
    },
    {
      id: 3,
      title: 'Producto',
      price: '120',
      date: '15 March 2022 8:20 PM',
    },
    {
      id: 4,
      title: 'Token',
      price: '120',
      date: '15 March 2022 8:20 PM',
    },
    {
      id: 5,
      title: 'Inersion',
      price: '120',
      date: '15 March 2022 8:20 PM',
    },
  ];

  const tabBarHeight = useBottomTabBarHeight();

  const RenderFlatListItem = ({data, type}) => {
    if (data.length > 0) {
      return (
        <ScrollView>
          {data.map(idx => (
            <TransactionItem data={idx} key={'ti' + idx.id} />
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
    {key: 'second', title: 'Shopping'},
    {key: 'third', title: 'Commissions'},
  ]);

  const renderScene = SceneMap({
    first: () => <RenderFlatListItem type={'all'} data={tData} />,
    second: () => <RenderFlatListItem type={'shopping'} data={tData} />,
    third: () => <RenderFlatListItem type={'commisions'} data={tData} />,
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
      <SearchTransaction />
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
  fetchUnread: params => dispatch(fetchUnreadAction(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(TransactionView));
