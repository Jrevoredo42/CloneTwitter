import {TweetProps} from '../hook/useTweet';

export const tweet = (): Promise<TweetProps[]> =>
  new Promise((resolve, _) =>
    resolve([
      {
        user: {
          name: 'Martha Craig',
          username: '@craig_love',
          avatar: require('../assets/users/user-1.png'),
        },
        time: '2h',
        twitte:
          'UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou',
        __meta__: {
          likes_count: 21,
          comments_count: 18,
          reply_count: 5,
        },
        liked: false,
        users_liked: 'Kieron Dotson and Zack John liked',
      },
      {
        user: {
          name: 'Maximmilian',
          username: '@maxjacobson',
          avatar: require('../assets/users/user-2.png'),
        },
        time: '3h',
        twitte: 'Y’all ready for this next post?',
        __meta__: {
          likes_count: 21,
          comments_count: 18,
          reply_count: 5,
        },
        liked: false,
        users_liked: 'Kieron Dotson and Zack John liked',
      },
      {
        user: {
          name: 'Tabitha Potter',
          username: ' @mis_potter',
          avatar: require('../assets/users/user-3.png'),
        },
        time: '14h',
        twitte:
          'UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou',
        __meta__: {
          likes_count: 21,
          comments_count: 18,
          reply_count: 5,
        },
        liked: false,
        users_liked: 'Kieron Dotson and Zack John liked',
      },
      {
        user: {
          name: 'Martha Craig',
          username: '@craig_love',
          avatar: require('../assets/users/user-4.png'),
        },
        time: '12h',
        twitte:
          'UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou',
        __meta__: {
          likes_count: 21,
          comments_count: 18,
          reply_count: 5,
        },
        liked: false,
        users_liked: 'Kieron Dotson and Zack John liked',
      },
    ]),
  );
