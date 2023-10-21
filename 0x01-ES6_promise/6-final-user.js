import signUpUser from '4-user-promise.js';
import uploadPhoto from '5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
  .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
  .then((res) => (
    res.map((p) => (
      {
        status: p.status,
        value: p.value === 'fulfilled' ? p.value : String(p.reason)
      }
    ))
  ));
}
