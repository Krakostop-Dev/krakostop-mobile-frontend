const AVATAR_GOOGLE = require('../assets/avatar_google.png');

const mockUser = {
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.ye4T1nR74vnxv1Vjupk0LSplqoVwoi1jAQ267D4XJZ0',
  isLoggedIn: true,
  user: {
    id: 1,
    first_name: 'Tomasz',
    last_name: 'Pęcak',
    email: 'pecatoma@gmail.com',
    verified_login: true,
    created_at: '2019-09-01T09:55:51.984Z',
    updated_at: '2019-11-04T11:13:14.946Z',
    pairID: '',
    rank: '10',
    avatar: AVATAR_GOOGLE,
  },
};

export default mockUser;
