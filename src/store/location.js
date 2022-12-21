import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLocationStore = create(
  persist(
    set => ({
      currentLocation: {},
      setCurrentLocation: currentLocation => set({currentLocation}),
    }),
    {
      name: 'location-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);

export default useLocationStore;
