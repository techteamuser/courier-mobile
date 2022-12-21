import React, {useState} from 'react';
import {RefreshControl} from 'react-native';

export default function useRefreshControl(queries, interval = 0) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = () => {
    setIsRefreshing(true);
    queries.forEach((query, index) => {
      setTimeout(() => {
        query.refetch();
      }, index * interval);
    });
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />;
}
