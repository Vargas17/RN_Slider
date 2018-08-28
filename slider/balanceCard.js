import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class BalanceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.content}>
        <View>
          <Text style={styles.headerText}>Seu saldo</Text>
          <View style={styles.balance}>
            <Text style={styles.smallBalanceText}>$</Text>
            <Text style={styles.bigBalanceText}>20.586</Text>
            <Text style={styles.smallBalanceText}>,09</Text>
          </View>
        </View>
        <View styles={styles.info}>
          <View>
            <View>
              <Text style={[styles.infoText, styles.infoGreenText]}>$12.887 recebido</Text>
              <Text style={styles.infoText}>de Arthur, hoje às 8:34.</Text>
            </View>
            <View styles={styles.progressBar}>
              <View styles={styles.receivedBar}></View>
              <View styles={styles.paidBar}></View>
            </View>
          </View>
          <Text style={styles.footerText}>Ver extrato completo</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#4a4a4a'
  },
  smallBalanceText: {
    fontSize: 17,
    fontWeight: "900",
    fontStyle: 'normal',
    letterSpacing: 1,
    color: '#4a4a4a',
    marginBottom: 8,
  },
  bigBalanceText: {
    fontSize: 42,
    fontWeight: "900",
    fontStyle: 'normal',
    letterSpacing: 1,
    color: '#4a4a4a'
  },
  infoText: {
    fontSize: 14,
    fontWeight: '300',
    fontStyle: 'normal',
    color: '#4a4a4a'
  },
  infoGreenText: {
    fontWeight: '500',
    color: '#21a63d'
  },
  footerText: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#9b9b9b'
  },
  info: {
    justifyContent: 'space-between'
  },
  progressBar: {
    height: 3,
  },
  receivedBar: {
    flex: 3,
    backgroundColor: '#21a63d'
  },
  paidBar: {
    flex: 1,
    backgroundColor: '#ff5a5f'
  },
});

export default BalanceCard;
