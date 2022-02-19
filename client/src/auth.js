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
  isLoggedOut: () => {
    !isLoggedIn();
  },
  jwtInterceptor: (axios) => {
    axios.interceptors.request.use((req) => {
      // add auth header with jwt if account is logged in and request is to the api url
      const expiresAt = JSON.parse(localStorage.getItem('expires'));
      const isLoggedIn = dayjs().isBefore(dayjs(expiresAt));
      // const isApiUrl = req.url.startsWith(api);

      if (isLoggedIn) {
        req.headers.Authorization = localStorage.getItem('token');
      }
      return req;
    });
  }
};

export default authService;
