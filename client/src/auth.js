import moment from 'moment';

const authService = {
  setLocalStorage: (response) => {
    console.log('hitting setLocalStorage')
    const expires = moment().add(response.expiresIn);
    localStorage.setItem('token', response.token);
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()));
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  },
  getExpiration: () => {
    // TO DO
    const expiration = localStorage.getItem('expires');
    const expiresAt = JSON.parse(expiration);
    return momnet(expiresAt);
  },
  isLoggedIn: () => {
    // TO DO
    moment().isBefore(getExpiration());
  },
  isLoggedOut: () => {
    // TO DO
    !isLoggedIn();
  }
};

export default authService;
