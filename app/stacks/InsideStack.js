import React from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeContext} from '../theme';
import {outsideHeader, themedHeader, StackAnimation} from '../utils/navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SidebarView from '../views/SidebarView';
import HomeView from '../views/HomeView';
import PostsView from '../views/HomeView/posts';
import RecentView from '../views/HomeView/recent';
import ProfileEditView from '../views/ProfileEditView';
import FindFriendView from '../views/FindFriendView';
import FriendView from '../views/FriendView';
import FollowView from '../views/FollowView';
import CreatePostView from '../views/CreatePostView';
import PostDetailView from '../views/PostDetailView';
import TransactionView from '../views/TransactionView';
import ChatView from '../views/ChatView';
import SettingView from '../views/SettingView';
import AboutView from '../views/AboutView';
import SecurityView from '../views/SecurityView';
import BlockView from '../views/BlockView';
import CategoryView from '../views/CategoryView';
import VipMembersClubView from '../views/VipMembersClubView';
import ProductDetailView from '../views/ProductDetailView';
import EditPostView from '../views/EditPostView';
import ProductWebView from '../views/ProductWebView';
import PickLibraryView from '../views/PickLibraryView';
import UpdateProfileAndBasicInfo from '../views/UpdateProfileAndBasicInfo';
import {MainTabBar} from '../containers/MainScreen';
import MenuStack from './MenuStack';

import DetailsView from '../views/DetailsView';
import NotificationView from '../views/NotificationView';
import MarketView from '../views/MarketView';

const Tab = createBottomTabNavigator();
const Inside = createStackNavigator();

const HomeStack = () => (
  <Inside.Navigator>
    <Inside.Screen
      name="Home"
      component={HomeView}
      options={{headerShown: false}}
    />
    <Inside.Screen
      name="Posts"
      component={PostsView}
      options={{headerShown: false}}
    />
  </Inside.Navigator>
);

const TabStack = () => {
  const {theme} = React.useContext(ThemeContext);

  return (
    <Tab.Navigator
      tabBar={props => <MainTabBar theme={theme} {...props} />}
      screenOptions={{
        ...outsideHeader,
        ...themedHeader(theme),
        ...StackAnimation,
      }}
      sceneContainerStyle={{backgroundColor: 'transparent'}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Market"
        component={MarketView}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionView}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Details"
        component={DetailsView}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const InsideStack = () => {
  const {theme} = React.useContext(ThemeContext);

  return (
    <Inside.Navigator
      screenOptions={{
        ...outsideHeader,
        ...themedHeader(theme),
        ...StackAnimation,
      }}>
      <Inside.Screen
        name="Home"
        component={TabStack}
        options={{headerShown: false}}
      />
      <Inside.Screen
        name="Recent"
        component={RecentView}
        options={RecentView.navigationOptions}
      />
      <Inside.Screen name="ProfileEdit" component={ProfileEditView} />
      <Inside.Screen
        name="Friend"
        component={FriendView}
        options={FriendView.navigationOptions}
      />
      <Inside.Screen
        name="FindFriend"
        component={FindFriendView}
        options={{headerShown: false}}
      />
      <Inside.Screen
        name="Notification"
        component={NotificationView}
        options={{headerShown: false}}
      />
      <Inside.Screen name="Follow" component={FollowView} />
      <Inside.Screen name="CreatePost" component={CreatePostView} />
      <Inside.Screen name="EditPost" component={EditPostView} />
      <Inside.Screen
        name="PostDetail"
        component={PostDetailView}
        options={{headerShown: false}}
      />
      <Inside.Screen name="Chat" component={ChatView} />
      <Inside.Screen name="Setting" component={SettingView} />
      {/*<Inside.Screen name="About" component={AboutView} />*/}
      <Inside.Screen name="Security" component={SecurityView} />
      {/*<Inside.Screen name="Block" component={BlockView} />*/}
      <Inside.Screen name="ProductWeb" component={ProductWebView} />
      <Inside.Screen
        name="Category"
        component={CategoryView}
        options={CategoryView.navigationOptions}
      />
      <Inside.Screen
        name="VipMembers"
        component={VipMembersClubView}
        options={VipMembersClubView.navigationOptions}
      />
      <Inside.Screen name="ProductDetail" component={ProductDetailView} />
      <Inside.Screen name="PickLibrary" component={PickLibraryView} />
      <Inside.Screen
        name="UpdateProfileAndBasicInfo"
        component={UpdateProfileAndBasicInfo}
        options={{headerShown: false}}
      />
    </Inside.Navigator>
  );
};
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={({navigation, state}) => (
        <SidebarView navigation={navigation} state={state} />
      )}
      initialRouteName="InsideStack"
      screenListeners={({navigation}) => {
        const state = navigation.getState();
        if (
          state.history.length > 2 &&
          state.history.filter(i => i.type === 'drawer').length > 0
        ) {
          navigation.navigate('InsideStack');
          navigation.toggleDrawer();
        }
      }}
      screenOptions={{
        swipeEnabled: true,
        drawerStyle: {
          width: Dimensions.get('window').width - 100,
        },
      }}>
      <Drawer.Screen
        name="InsideStack"
        component={InsideStack}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MenuStack"
        component={MenuStack}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
