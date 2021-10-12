import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native'

const fake = () => <View />

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {fake} />
            <Tab.Screen name = "Search" component = {fake} />
            <Tab.Screen name = "Notification" component = {fake} />
            <Tab.Screen name = "Mail" component = {fake} />
        </Tab.Navigator>
    )
}

const AppNavigation: React.FC = () => (
    <NavigationContainer>
        <BottomTabs />
    </NavigationContainer>
);



export default AppNavigation;