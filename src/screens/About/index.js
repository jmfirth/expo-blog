import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default class Screen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>
          About
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sagittis justo. Quisque vehicula vitae massa et dignissim. Nulla vehicula nunc in consequat sagittis. Integer in massa ac diam molestie tempus. Sed convallis leo eget ligula viverra feugiat. Donec sodales condimentum nisl, et semper nunc dictum in. Donec vestibulum, tellus laoreet posuere ullamcorper, velit ligula ultricies mi, ac ullamcorper leo nisl non elit. Morbi non molestie lorem, eu faucibus libero. Suspendisse feugiat lacus bibendum molestie auctor.
        </Text>
        <Text style={styles.paragraph}>
          Praesent ut pulvinar dui, nec scelerisque ipsum. Suspendisse sit amet tempor velit, vitae aliquam justo. Proin nec fermentum metus, a molestie mi. Quisque scelerisque ex tristique ipsum suscipit porta. Suspendisse potenti. Nam blandit facilisis malesuada. Curabitur id facilisis metus. Praesent fermentum massa id nisl lacinia viverra. Suspendisse eu egestas arcu. Maecenas eu volutpat diam, sit amet commodo dui. Suspendisse potenti. Aliquam erat volutpat. Phasellus eget ligula augue. Maecenas dictum, ante vel vestibulum elementum, massa eros rutrum velit, quis pulvinar neque lectus sed felis.
        </Text>
        <Text style={styles.paragraph}>
          Nam id viverra justo. Ut eget ultricies libero. Maecenas tincidunt mattis convallis. Phasellus cursus erat eget vulputate placerat. Ut finibus lacinia nunc nec tempor. Nunc nunc orci, varius in placerat ac, varius et diam. Vestibulum eu arcu a metus vestibulum ultrices. Suspendisse ac velit imperdiet, aliquam justo sed, pellentesque nisl.
        </Text>
        <Text style={styles.paragraph}>
          Maecenas vitae dignissim ex. Suspendisse laoreet eros nec ullamcorper ullamcorper. Morbi finibus eget enim lobortis ornare. Curabitur ac erat et felis auctor bibendum. Sed dignissim nulla nec mi rutrum dignissim. Maecenas congue vulputate euismod. Fusce cursus nulla magna.
        </Text>
        <Text style={styles.paragraph}>
          Integer vitae nisl efficitur, consequat urna vel, semper diam. Nulla egestas, urna et mollis aliquam, justo libero mollis purus, et aliquet purus odio eu tortor. Etiam non varius erat. Duis tempus, eros quis aliquet molestie, erat metus condimentum tortor, non blandit dui arcu non nulla. Nunc ac lacinia odio. Proin a efficitur massa, in rutrum quam. Integer id egestas nisi.
        </Text>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: '24',
  },
  paragraph: {
    marginVertical: 10,
  },
};
