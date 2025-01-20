import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostsScreen from './PostScreen';
import MentionScreen from './MentionScreen';

const Tab = createMaterialTopTabNavigator();

const ProfileTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="Mentions" component={MentionScreen} />
    </Tab.Navigator>
  );
};

export default ProfileTabs;