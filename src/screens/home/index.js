import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function HomeScreen() {
  const tw = useTailwind();
  return (
    <View style={tw('flex-1')}>
      <Text style={tw('ml-2')}>HomeScreen</Text>
    </View>
  );
}
