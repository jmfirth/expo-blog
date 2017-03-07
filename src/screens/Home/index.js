import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import {
  VictoryChart,
  VictoryTooltip,
  VictoryScatter,
} from '../../lib/victory';
import { Link } from '../../lib/react-router';
import { Container } from '../../components';

export default class Screen extends Component {
  render() {
    return (
      <Container scroll pad="small">
        <Text>Hello, {Platform.OS}!</Text>
        <Text>Just an example chart...</Text>
        <VictoryChart>
          <VictoryScatter
            labelComponent={<VictoryTooltip/>}
            data={[
              {
                x: 1, y: 3, fill: "red",
                symbol: "plus", size: 6, label: "WOW\nSTUFF"
              },
              {
                x: 2, y: 5, fill: "magenta",
                size: 9, opacity: 0.4, label: "WAT"
              },
              {
                x: 3, y: 4, fill: "orange",
                size: 5, label: "LABEL"
              },
              {
                x: 4, y: 2, fill: "brown",
                symbol: "square", size: 6, label: "OKAY"
              },
              {
                x: 5, y: 5, fill: "black",
                symbol: "triangleUp", size: 5, label: "GOOD"
              }
            ]}
         />
        </VictoryChart>
      </Container>
    );
  }
}

const styles = {

};
