import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import constants from './constants';

const { $fontColor, $lightFontColor, $highlightColor1, $highlightColor2 } = constants;

const viewIcon = require('./img/ic-view.png');

class BalanceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleBalance: true
    };
  }

  toggleBalance() {
    this.setState({ visibleBalance: !this.state.visibleBalance });
  }

  render() {
    const { visibleBalance } = this.state;

    const {
      integerDigits,
      fractionDigits,
      paidProportion,
      receivedProportion,
      txType,
      infoText,
      infoText2
    } = this.props.data;

    const colorTable = {
      receive: $highlightColor1,
      send: $highlightColor2
    };

    return (
      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Seu saldo</Text>
            <View style={styles.balance}>
              <Text style={styles.smallBalanceText}>$</Text>
              <Text style={styles.bigBalanceText}>{integerDigits}</Text>
              <Text style={styles.smallBalanceText}>,{fractionDigits}</Text>
            </View>
          </View>

          <TouchableWithoutFeedback onPress={this.toggleBalance.bind(this)}>
            <View style={styles.icon}>
              <Image source={visibleBalance ? viewIcon : viewIcon} />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View>
          <View>
            <Text style={[styles.infoText, {color: colorTable[txType], fontWeight: '500'}]}>{infoText}</Text>
            <Text style={styles.infoText}>{infoText2}</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.receivedBar, {flex: receivedProportion}]}></View>
            <View style={[styles.paidBar, {flex: paidProportion}]}></View>
          </View>
        </View>

        <Text style={styles.footerText}>Ver extrato completo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: $fontColor
  },
  smallBalanceText: {
    fontSize: 17,
    fontWeight: "900",
    fontStyle: 'normal',
    letterSpacing: 1,
    color: $fontColor,
    marginBottom: 8,
  },
  bigBalanceText: {
    fontSize: 42,
    fontWeight: "900",
    fontStyle: 'normal',
    letterSpacing: 1,
    color: $fontColor
  },
  infoText: {
    fontSize: 14,
    fontWeight: '300',
    fontStyle: 'normal',
    color: $fontColor
  },
  footerText: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: $lightFontColor
  },
  progressBar: {
    flexDirection: 'row',
    height: 3,
    alignSelf: 'stretch',
    marginTop: 5,
  },
  receivedBar: {
    backgroundColor: $highlightColor1,
    borderRadius: 2
  },
  paidBar: {
    backgroundColor: $highlightColor2,
    borderRadius: 2,
  },
  icon: {
    justifyContent: 'center',
    marginTop: 12
  }
});

export default BalanceCard;
