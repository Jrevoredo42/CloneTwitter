import  {useEffect, useState} from 'react';
import { tweet as serverTweet } from '../mock/server';


export interface TweetProps {

    user: User;
      time: string;
      twitte: string;
      __meta__: Meta;
      liked: boolean,
      users_liked: string;
}

interface User {

    name: string,
    username: string,
    avatar: any,

}

interface Meta {

    likes_count: number
    comments_count: number;
    reply_count: number;

}

const useTweet = () => {
    const [tweet, setTweet] = useState<TweetProps[]>();

        useEffect(() =>{
            serverTweet().then(res=> setTweet(res)); 
        },  []);

    return{tweet};
}

export default useTweet;