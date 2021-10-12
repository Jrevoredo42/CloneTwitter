import React from 'react';
import { Text, View } from 'react-native';
import HeaderComponent from '../../components/Header';

const HomeScreen: React.FC = () => {
    return <View>
        <HeaderComponent />
        <Text>
            Home Screen
        </Text>
    </View>

} 

export default HomeScreen;