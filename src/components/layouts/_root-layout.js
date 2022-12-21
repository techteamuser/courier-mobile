import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StatusBar} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ErrorBoundary from 'react-native-error-boundary';
import {setLogger} from 'react-query';
import {ErrorScreen} from '../../screens';
import {useApiStore} from '../../store';
// import { KNOWN_EXCEPTION_ERRORS } from '../../constants/setting';
// import { API_BASE_HOST } from '../../config';
// import { FlashMessage } from '../commons';
// import DevMode from '../commons/dev-mode';

export default function BaseLayout({children}) {
  const tw = useTailwind();

  const setErrorServer = useApiStore(state => state.setErrorServer);
  const setIsNetworkError = useApiStore(state => state.setIsNetworkError);

  setLogger({
    log: message => {
      console.log('message', message);
    },
    warn: warn => {
      console.log('warning', warn);
    },
    error: error => {
      console.log('error', error);
      //   Sentry.captureEvent(error.toJSON());
      //   const isNetworkError = error.toJSON().message === 'Network Error';
      //   if (isNetworkError) { setIsNetworkError(true); }
      //   // console.log('💥', error?.response);
      //   const path = getPath(error?.response?.config?.url) || '';
      //   const knownExectionErrors = KNOWN_EXCEPTION_ERRORS[path]?.status || [];
      //   const hasErrorCode = !!error?.response?.data?.data?.errorCode;

      //   const hasErrorCod = !!(((isCOD && error?.response?.status === 504)
      //     || error?.response?.data?.key));

      //   if (!knownExectionErrors.includes(error?.response?.status) && !hasErrorCod && !hasErrorCode) {
      //     const errResponse = error?.response;
      //     delete errResponse?.config?.headers?.Authorization;
      //     delete errResponse?.request;
      //     setErrorServer(errResponse);
      //   }
    },
  });

  return (
    <>
      <StatusBar />
      <SafeAreaView style={tw('flex-1')}>
        <SafeAreaProvider>
          {/* <ThemeProvider theme={theme}> */}
          <ErrorBoundary FallbackComponent={ErrorScreen}>
            {/* <DevMode /> */}
            {children}
            {/* <FlashMessage /> */}
          </ErrorBoundary>
          {/* </ThemeProvider> */}
        </SafeAreaProvider>
      </SafeAreaView>
    </>
  );
}

BaseLayout.propTypes = {
  /** children */
  children: PropTypes.node,
};
