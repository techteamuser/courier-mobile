import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {NetworkProvider} from 'react-native-offline';
import {QueryClient, QueryClientProvider} from 'react-query';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';
import SplashScreen from 'react-native-splash-screen';
import {RootLayout} from './components/layouts';
import Navigations from './navigations/_root-navigations';

LogBox.ignoreAllLogs();
const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <QueriesWrapper> */}
      <NetworkProvider>
        <TailwindProvider utilities={utilities}>
          <RootLayout>
            {/* <ModalErrorAPI /> */}
            <Navigations />
          </RootLayout>
        </TailwindProvider>
      </NetworkProvider>
      {/* </QueriesWrapper> */}
    </QueryClientProvider>
  );
}
