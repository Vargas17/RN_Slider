/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from './slider';
import utils from './utils.js';

const data = {
  "totalTransfered": 173.50,
  "totalPaid": 123.40,
  "totalReceived": 50.10,
  "balance": 20586.09,
  "recentTransfers": [
    {
      "type": "send",
      "from": "Arthur",
      "to": "Mateus",
      "value": 5,
      "description": "cerveja",
      "createdAt": "2018-08-28T18:15:50.786Z",
      "qrcode": "data:image/png;base64,hash"
    },
    {
      "type": "receive",
      "from": "Mateus",
      "to": "Arthur",
      "value": 2,
      "description": "pao de queijo",
      "createdAt": "2018-08-22T20:00:42.870Z",
      "qrcode": "data:image/png;base64,hash"
    },
    {
      "type": "send",
      "from": "Arthur",
      "to": "Ana",
      "value": 20,
      "description": "almoço",
      "createdAt": "2018-08-23T14:21:14.041Z",
      "qrcode": "data:image/png;base64,hash"
    }
  ]
};

const sliderItems = utils.parseSummaryData(data);
console.log('ITEEMMS>>>', sliderItems);

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
