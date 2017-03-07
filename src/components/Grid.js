/**
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

const isNumber = a => typeof a === 'number';

type Style = {
  grid: number,
  row: number,
  column: number
}

const styles: Style = StyleSheet.create({
  grid: { flex: 1 },
  row: { flex: 1, flexDirection: 'row' },
  column: { flex: 1, flexDirection: 'column' },
});

type FlexboxProps = {
  children: ReactElement<> | Array<ReactElement<>>,
  style?: { [key: string]: any },
  justify?: string,
  align?: string,
  props?: Array<any>,
  flex?: number,
  width?: number,
  height?: number,
}

type GridProps = FlexboxProps & {
  direction?: string,
}

export const Grid = ({
  children,
  style = {},
  justify,
  align,
  flex,
  width,
  height,
  direction,
  ...props
}: GridProps) => (
  <View
    style={StyleSheet.flatten([
      styles.grid,
      direction ? { flexDirection: direction } : undefined,
      justify ? { justifyContent: justify } : undefined,
      align ? { alignItems: align } : undefined,
      isNumber(flex) ? { flex } : undefined,
      isNumber(width) ? { width } : undefined,
      isNumber(height) ? { height } : undefined,
      style,
    ])}
    {...props}
  >
    {children}
  </View>
);

Grid.defaultProps = () => ({
  direction: undefined,
  children: null,
  style: {},
  justify: undefined,
  align: undefined,
  flex: undefined,
  width: undefined,
  height: undefined,
  props: [],
});

export const Row = ({
  children,
  style = {},
  justify,
  align,
  flex,
  width,
  height,
  ...props
}: FlexboxProps) => (
  <View
    style={StyleSheet.flatten([
      styles.row,
      justify ? { justifyContent: justify } : undefined,
      align ? { alignItems: align } : undefined,
      isNumber(flex) ? { flex } : undefined,
      isNumber(width) ? { width } : undefined,
      isNumber(height) ? { height } : undefined,
      style,
    ])}
    {...props}
  >
    {children}
  </View>
);

Row.defaultProps = () => ({
  children: null,
  style: {},
  justify: undefined,
  align: undefined,
  flex: undefined,
  width: undefined,
  height: undefined,
  props: [],
});

export const Col = ({
  children,
  style = {},
  justify,
  align,
  flex,
  width,
  height,
  ...props
}: FlexboxProps) => (
  <View
    style={StyleSheet.flatten([
      styles.column,
      justify ? { justifyContent: justify } : undefined,
      align ? { alignItems: align } : undefined,
      isNumber(flex) ? { flex } : undefined,
      isNumber(width) ? { width } : undefined,
      isNumber(height) ? { height } : undefined,
      style,
    ])}
    {...props}
  >
    {children}
  </View>
);

Col.defaultProps = () => ({
  children: undefined,
  style: undefined,
  justify: undefined,
  align: undefined,
  flex: undefined,
  width: undefined,
  height: undefined,
  props: [],
});
