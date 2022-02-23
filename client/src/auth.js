import dayjs from 'dayjs';

const authService = {
  setLocalStorage: (res) => {
    const expires = dayjs().add(res.expiresIn[0], res.expiresIn[1]);
    localStorage.setItem('user', res.username);
    localStorage.setItem('token', res.token);
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()));
  },
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  },
  jwtInterceptor: (axios) => {
    // it's only getting hit once when the page first loads'
    // console.log('hitting intercepter');
    axios.interceptors.request.use(
      (req) => {
        const expiresAt = JSON.parse(localStorage.getItem('expires'));
        const isLoggedIn = dayjs().isBefore(dayjs(expiresAt));
        const isApiUrl = req.url.includes('main')
        || req.url.includes('requestStatus')
        || req.url.includes('requestDash')
        || req.url.includes('runnerStatus')
        || req.url.includes('runnerDash');

        if (isLoggedIn && isApiUrl) {
          req.headers.common.Authorization = localStorage.getItem('token');
        }
        return req;
      },
      (err) => Promise.reject(err)
    );
  },
  isLoggedIn: (cb) => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      cb(loggedInUser);
    }
  }
};

export default authService;
