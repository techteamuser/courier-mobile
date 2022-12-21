import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import {ErrorScreen} from '../../screens';
import {ErrorCard, ErrorSection} from '../sections';

export default function withErrorBoundary(Component, type = 'screen') {
  const FallbackComponent = {
    screen: ErrorScreen,
    section: ErrorSection,
    card: ErrorCard,
    // 'card-bordered': ErrorCardBordered,
  }[type];
  return props => (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Component {...props} />
    </ErrorBoundary>
  );
}
