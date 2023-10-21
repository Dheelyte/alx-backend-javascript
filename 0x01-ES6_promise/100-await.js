import createUser from 'utils.js';
import uploadPhoto from 'utils.js';

export default async function asyncUploadUser() {
  let res;

  try {
    user = await createUser();
    photo = await uploadPhoto();
    res = {
      photo: photo,
      user: user
    };
  } catch {
     res = {
       photo: null,
       user: null
     }
  }

  return res;
}
