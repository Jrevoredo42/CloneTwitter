import React from 'react';
import { Image, View } from 'react-native';
import {styles} from './styles';

const logo = require('../../assets/logo.png');
const feature = require('../../assets/feature.png');
const user = require('../../assets/users/user-1.png');



const HeaderComponent: React.FC = () => {
    return <View style= {styles.container}>
        <View>
        <Image source= {user} style={styles.avatar}></Image>
        </View>
        <View>
            <Image source= {logo} style={styles.logo}></Image>
        </View>
        <View>
        <Image source= {feature} style={styles.icon}></Image>
        </View>
    </View>
}

export default HeaderComponent;