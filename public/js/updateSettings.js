/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/users/updatePassword'
        : 'http://127.0.0.1:3000/api/v1/users/updateMe';

    const res = await axios({ method: 'PATCH', url, data });

    if (res.status === 200) {
      showAlert('success', `Your ${type} successfuly updated`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
