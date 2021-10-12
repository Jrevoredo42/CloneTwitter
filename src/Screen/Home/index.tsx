import React from 'react';
import { FlatList, View } from 'react-native';
import HeaderComponent from '../../components/Header';
import useTweet from '../../hook/useTweet';
import FeedItem from '../FeedItem'
import { TweetProps } from '../../hook/useTweet'

const HomeScreen: React.FC<TweetProps> = () => {
    const {tweet} = useTweet();
    
    
    
    return(
         <View>
        <HeaderComponent />
            <FlatList 
            data={tweet}
            keyExtractor={(_, index)=> String(index)}
            renderItem={({item, index }) => (
         <FeedItem item={item} key={String(index)} />
        )}
            
            
            />
    </View>

    );
            };
export default HomeScreen;