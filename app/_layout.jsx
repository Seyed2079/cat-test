import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack options={{ headerShown: false }} />
    </View>
  );
}