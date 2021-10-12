import React from 'react';
import { Image, View } from 'react-native'
import { styles } from './styles';
import {TweetProps} from '../../hook/useTweet';

interface Props {
    item: TweetProps;
}

const FeedItem: React.FC<Props> = ({item}) => {
    return <View style={styles.container}>
        <View style={styles.avatarView}>
            <Image source= {item.user.avatar} />
            </View>
        </View>

}

export default FeedItem;