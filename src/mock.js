const AVATAR_GOOGLE = require('../assets/avatar_google.png');

const mockUser = {
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.ye4T1nR74vnxv1Vjupk0LSplqoVwoi1jAQ267D4XJZ0',
  user: {
    id: 1,
    first_name: 'Justyna',
    last_name: 'Basiak',
    email: 'justynabasiak@interia.pl',
    verified_login: false,
    created_at: '2020-02-24T17:37:29.128Z',
    updated_at: '2020-02-24T17:37:34.498Z',
    phone: '515189436',
    city: 'Kraków',
    pair_id: 1,
    messenger: null,
    avatar: AVATAR_GOOGLE,
  },
};

export default mockUser;
