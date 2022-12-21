import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {NetworkProvider} from 'react-native-offline';
import {QueryClient, QueryClientProvider} from 'react-query';
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
        <RootLayout>
          {/* <ModalErrorAPI /> */}
          <Navigations />
        </RootLayout>
      </NetworkProvider>
      {/* </QueriesWrapper> */}
    </QueryClientProvider>
  );
}
