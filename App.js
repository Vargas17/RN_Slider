/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import CardSlider from './cardSlider';
import utils from './utils';

const data = {
  "totalTransfered": 173.50,
  "totalPaid": 123.40,
  "totalReceived": 50.10,
  "balance": 20586.09,
  "recentTransfers": [
    {
      "type": "send",
      "from": "arthur@rethink.ws",
      "to": "julia@email.com",
      "counterpartName": "Julia",
      "value": 12,
      "description": "churrasco",
      "createdAt": "2018-08-30T15:20:35.569Z",
      "qrcode": "data:image/png;base64,hash"
    },
    {
      "type": "send",
      "from": "arthur@rethink.ws",
      "to": "helena@email.com",
      "counterpartName": "Helena",
      "value": 10,
      "description": "camisa",
      "createdAt": "2018-08-30T15:17:10.546Z",
      "qrcode": "data:image/png;base64,hash"
    },
    {
      "type": "receive",
      "from": "julia@email.com",
      "to": "arthur@rethink.ws",
      "counterpartName": "Julia",
      "value": 5,
      "description": "cerveja",
      "createdAt": "2018-08-30T15:18:26.286Z",
      "qrcode": "data:image/png;base64,hash"
    }
  ]
};

const sliderItems = utils.parseSummaryData(data);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <CardSlider sliderItems={sliderItems}></CardSlider>
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
    height: 262,
  }
});
