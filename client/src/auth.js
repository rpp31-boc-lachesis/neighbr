import dayjs from 'dayjs';

const authService = {
  setLocalStorage: (res) => {
    const expires = dayjs().add(res.expiresIn[0], res.expiresIn[1]);
    localStorage.setItem('token', res.token);
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()));
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  },
  getExpiration: () => {
    const expiration = localStorage.getItem('expires');
    const expiresAt = JSON.parse(expiration);
    return dayjs(expiresAt);
  },
  isLoggedIn: () => {
    dayjs().isBefore(getExpiration());
  },
  isLoggedOut: () => {
    !isLoggedIn();
  }
};

export default authService;
