import PropTypes from 'prop-types';
import FormData from 'form-data';
import KsAxios from '../communication/KsAxios';

const NO_USER = 'Brak użytkownika dla podanego tokenu';
const CONNECTION_PROBLEM =
  'Wystąpił problem z połączeniem. Spróbuj ponownie później.';

async function updateUser(avatar, msgLink) {
  const data = new FormData();
  if (avatar) {
    data.append('avatar', {
      uri: avatar,
      type: 'image/jpg',
      name: 'avatar.jpg',
    });
  }
  if (msgLink) {
    data.append('messenger', msgLink);
  }
  let response;
  try {
    response = await KsAxios.put('/api/v1/profile', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      processData: false,
      mimeType: 'multipart/form-data',
      contentType: false,
    });
    if (response.status === 200) {
      return {
        status: 200,
        user: response.data,
      };
    }
    return {
      status: 500,
      message: CONNECTION_PROBLEM,
    };
  } catch (e) {
    const status = e.response ? e.response.status : 500;
    if (status === 401) {
      return {
        status,
        message: NO_USER,
      };
    }
    return {
      status,
      message: CONNECTION_PROBLEM,
    };
  }
}

export default updateUser;
updateUser.defaultProps = {
  avatar: null,
  msgLink: null,
};

updateUser.propTypes = {
  avatar: PropTypes.string,
  msgLink: PropTypes.string,
};
