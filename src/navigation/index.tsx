import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Image, View } from 'react-native'
import HomeScreen from '../Screen/Home';

const home = require('../assets/tab/home.png');
const home_unselect = require('../assets/tab/home_unselect.png');
const mail = require('../assets/tab/mail.png');
const mail_unselect = require('../assets/tab/mail_unselect.png');
const notification = require('../assets/tab/notification.png');
const notification_unselect = require('../assets/tab/notification_unselect.png');
const search = require('../assets/tab/search.png');
const search_unselect= require('../assets/tab/search_unselect.png');



const fake = () => <View />

const Tab = createBottomTabNavigator();

const getIcons = (route: any, {focused}: any) => {
    if(route.name === "Home" && focused){
       return <Image source={home} />
    }

    if(route.name === "Home" && focused){
        return <Image source={home_unselect} />
     }

    if(route.name === "Notification" && focused){
       return <Image source={notification} />
    }

    if(route.name === "Notification" && focused){
        return <Image source={notification_unselect} />
     }

    if(route.name === "Search" && focused){
       return <Image source={search} />
    }

    if(route.name === "Search" && focused){
        return <Image source={search_unselect} />
     }

    if(route.name === "Mail" && focused){
       return <Image source={mail} />
    }

    if(route.name === "Mail" && focused){
        return <Image source={mail_unselect} />
     }

    return <Image source={home} />;
};


const BottomTabs = () => (
    
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: props => getIcons(route, props),
        })}>
            <Tab.Screen name = "Home" component = {HomeScreen} />
            <Tab.Screen name = "Search" component = {fake} />
            <Tab.Screen name = "Notification" component = {fake} />
            <Tab.Screen name = "Mail" component = {fake} />
        </Tab.Navigator>
);


const AppNavigation: React.FC = () => (
    <NavigationContainer>
        <BottomTabs />
    </NavigationContainer>
);



export default AppNavigation;