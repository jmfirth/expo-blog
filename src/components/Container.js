/**
 * @flow
 */

import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

type ContainerProps = {
  children?: ReactElement<*>,
  style?: { [key: string]: any },
  scroll: boolean,
  pad: 'small' | 'normal',
  other?: Array<any>
}

const Container = ({ children, pad, scroll, style, ...other }: ContainerProps) => {
  const container = (
    <View
      style={StyleSheet.flatten([
        styles.container,
        pad === 'small' ? { paddingHorizontal: 10 } : {},
        style,
      ])}
      {...other}
    >
      {children}
    </View>
  );
  return scroll ? (<ScrollView>{container}</ScrollView>) : container;
};

Container.defaultProps = () => ({
  children: undefined,
  style: undefined,
  other: undefined,
  scroll: false,
  pad: 'normal',
});

export default Container;

const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingBottom: 16,
  },
};
