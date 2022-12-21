import create from 'zustand';

const useApiStore = create(set => ({
  errorServer: {},
  setErrorServer: errorServer => {
    set({errorServer});
  },

  isNetworkError: false,
  setIsNetworkError: isNetworkError => {
    set({isNetworkError});
  },
}));

export default useApiStore;
