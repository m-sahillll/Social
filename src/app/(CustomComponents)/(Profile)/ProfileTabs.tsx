import React from 'react';
import { Text, View ,Image} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostsScreen from './PostScreen';
import MentionScreen from './MentionScreen';

const Tab = createMaterialTopTabNavigator();

const ProfileTabs = () => {
  return (
    <View style={{height:100,width:390,marginLeft:-20,marginTop:20}}>
             <Tab.Navigator
               screenOptions={{
               tabBarLabelStyle: { fontSize: 12 },
               tabBarItemStyle: { width: 200 },
               tabBarStyle: { backgroundColor:'#f2f2f2' },
               tabBarShowLabel: false, 
               tabBarIndicatorStyle: {
                backgroundColor: 'black', 
                marginLeft:65,
                height: 2,
                width:70, 
              },
               }}
             >
              
              <Tab.Screen
                name="Posts"
                component={PostsScreen}
                options={{
                  tabBarIcon: () => (
                    <Image 
                    style={{height:20,width:20}}
                    source={require("../../../assets/images/Grid.png")} />
                  )
                }}
              />
               <Tab.Screen 
               name="Mentions" 
               component={MentionScreen}
               options={{
                tabBarIcon: () => (
                  <Image 
                  style={{height:35,width:35}}
                  source={require("../../../assets/images/Mention.png")} />
                )
              }} />
             </Tab.Navigator>
       </View>
  );
};

export default ProfileTabs;