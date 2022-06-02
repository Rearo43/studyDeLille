import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

export const Header = () => {
  return (
    <View>
      <Text style={styles.header} category='h1'>
        Study DeLille
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginTop: 40,
    backgroundColor: '#2b2724',
    color: '#b1afa4',
  },
});
