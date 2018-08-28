/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from './slider'

const sliderItems = ['balance', 'history', 'change'];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Slider sliderItems={sliderItems}></Slider>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  wrapper: {
    height: 242,
  }
});
