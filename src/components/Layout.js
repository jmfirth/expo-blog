import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { Link } from '../lib/react-router';

export default class Layout extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          ...{ top: Platform.OS === 'ios' ? 20 : 0 },
        }}
      >
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
              <Link to="/">
                <Image
                  style={styles.headerImage}
                  source={{ uri: 'https://www.gravatar.com/avatar/d93d42b6e3acc1a199adea8cd8d3e2af?s=50' }}
                />
              </Link>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
              <Link to="/">
                <Text style={styles.linkText}>Home</Text>
              </Link>
              <Link to="/about">
                <Text style={styles.linkText}>About</Text>
              </Link>
            </View>
            {/*
            <View style={styles.headerTitle}>
              <Text style={styles.headerTitleText}>
                {title}
              </Text>
            </View>
            <View style={styles.headerRight}>

            </View>
            */}
          </View>
        </View>
        <View style={styles.body}>
          {children}
        </View>
      </View>
    );
  }
}

const MAX_DESKTOP_WIDTH = 1280;

const styles = {
  header: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'navy',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginLeft: Platform.OS === 'web' ? 'auto' : 0,
    marginRight: Platform.OS === 'web' ? 'auto' : 0,
    width: Platform.OS === 'web' ? '100%' : undefined,
    maxWidth: MAX_DESKTOP_WIDTH,
  },
  headerLeft: {
    width: 60,
    height: 60,
    padding: 5,
  },
  headerImage: {
    width: 50,
    height: 50,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    borderRadius: 3,
  },
  linkText: {
    color: '#fefefe',
    marginHorizontal: 10,
    fontSize: 20
  },
  headerRight: {
    width: 60,
    height: 60,
  },
  headerTitle: {
    flex: 1,
  },
  headerTitleText: {
    textAlign: 'center',
  },
  body: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: Platform.OS === 'web' ? 'auto' : 0,
    marginRight: Platform.OS === 'web' ? 'auto' : 0,
    maxWidth: MAX_DESKTOP_WIDTH,
  },
};
