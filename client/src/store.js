import { useState, createContext, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const UserContext = createContext(null);

export default function useAuth() {
  let history = useHistory();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);

  //set user
  const setUserContext = async () => {
    try {
      const res = await axios.get('/*');
      setUser(res.data.currentUser);
      history.push('/');
    } catch (e) {
      setError(err.response.data);
    }
  };

  // //register user
  // const registerUser = async (data) => {
  //   console.log(data);
  //   const { username, email, password, passwordConfirm } = data;
  //   return axios.post('/register', {
  //     username,
  //     email,
  //     password,
  //     passwordConfirm
  //   }).then(async () => {
  //     await setUserContext();
  //   })
  //     .catch((err) => setError(err.response.data));
  // };

  //login user
  const loginUser = async (data) => {
    axios.request({
      url: '/login',
      method: 'post',
      data
    })
      .then((res) => {
        const { data } = res;
        authService.setLocalStorage(data);
        window.localStorage.setItem('avatar_url', data.avatar_url);
        this.setState({
          user: data.username,
          userPhoto: data.avatar_url
        });
      })
      .catch((e) => {
        console.log(e);
        // setError('Uhhh, we couldn\'t find the id or password');
      });

    return axios.post('/login', {
      username,
      password,
    }).then(async () => {
      await setUserContext();
    }).catch((err) => {
      setError(err.response.data);
    });
  };
  useEffect(() => {
    if (user) {
      setUser(user);
    } else {
      setUser(false);
    }
  }, []);

  return {
    registerUser,
    loginUser,
    error
  };
}
