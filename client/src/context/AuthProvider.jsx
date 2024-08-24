import React, { useState, useEffect } from 'react';
import { getToken, setToken, removeToken, setTime, removeTime } from './../utils/auth';
import axios from './../utils/axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInUser } from './../services/auth';
import { AuthContext } from './AuthContext';
import useAxiosInterceptor from '../hooks/useAxiosInterceptors';
import { compareTime } from '../utils/helper';

const AuthProvider = (props) => {
  useAxiosInterceptor();
  const { children } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [user, setUser] = useState();
  const [LoadingUserData, setLoadingUserData] = useState(true);
  const [isExpired, setIsExpired] = useState(false);
  const token = getToken();
  const isAuthenticated = Boolean(token);

  useEffect(() => {
    if (!token) {
      removeToken();
      setUser(undefined);
      setLoadingUserData(false);
    }
  }, [navigate, pathname, token])


  const login = async (params) => {
    const { email, password } = params;
    try {
      const { token } = await signInUser({ email, password });
      setToken(token);
      setTime();
      window.location.href = "/";
    } catch (err) {
      const error = err;
      return error;
    }
  };

  const logout = () => {
    setUser(undefined);
    removeToken();
    removeTime();
    setIsExpired(false);
    navigate("/signin");
  };

  useEffect(() => {
    const token = getToken();
    async function getUserdata() {
      setLoadingUserData(true);
      try {
        const response = await axios.get("/auth/me");
        if (response?.user) {
          const { user } = response;
          setUser(user);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingUserData(false);
      }
    }
    if (token) {
      const hour = compareTime();
      if (hour >= 24 * 30) {
        setIsExpired(true);
      } else {
        getUserdata();
      }
    }
  }, [])


  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        isExpired,
        LoadingUserData,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
