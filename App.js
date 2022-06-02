import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { Header } from './header';
import { Final } from './wines';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Header />
    <Final />
  </ApplicationProvider>
);
