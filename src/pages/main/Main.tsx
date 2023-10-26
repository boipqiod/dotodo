import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import React from 'react';

export default function Main() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>asd</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
