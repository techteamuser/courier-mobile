import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthStore = create(
  persist(
    set => ({
      token: null,
      token_refresh: null,
      username: null,
      isAuthenticated: false,
      setAuth: data =>
        set({
          token: data.token,
          token_refresh: data.tokenRefresh,
          username: data.username,
          isAuthenticated: true,
        }),
      setNewToken: data =>
        set({
          token: data.token,
        }),
      clearAuth: () =>
        set({
          token: null,
          token_refresh: null,
          username: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: 'auth-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);

// Set initial value from storage
AsyncStorage.getItem('auth-storage').then(item => {
  const data = JSON.parse(item);
  if (data) {
    useAuthStore.setState({
      token: data?.state?.token,
      token_refresh: data?.state?.token_refresh,
      username: data?.state?.username,
      isAuthenticated: data?.state?.isAuthenticated,
    });
  }
});

export default useAuthStore;
