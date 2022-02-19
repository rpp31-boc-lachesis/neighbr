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
    axios.interceptors.request.use(
      (req) => {
        const expiresAt = JSON.parse(localStorage.getItem('expires'));
        const isLoggedIn = dayjs().isBefore(dayjs(expiresAt));
        const isApiUrl = req.url.includes('main')
        || req.url.includes('requestStatus')
        || req.url.includes('requestDash')
        || req.url.includes('runnerStatus')
        || req.url.includes('runnerDash');
        console.log(req.url, isApiUrl);

        if (isLoggedIn && isApiUrl) {
          req.headers.Authorization = localStorage.getItem('token');
        }
        return req;
      },
      (err) => Promise.reject(err)
    );
  }
};

export default authService;
