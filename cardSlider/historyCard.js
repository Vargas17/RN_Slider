import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import constants from './constants';

const { $fontColor, $lightFontColor, $highlightColor1, $highlightColor2 } = constants;

class HistoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItems() {
    const colorTable = {
      receive: $highlightColor1,
      send: $highlightColor2
    };
    return this.props.data.recentTransfers.map(({ txType, infoText, infoText2, counterpartUsername }, idx) => {
      return (
        <View key={idx} style={styles.summaryItem}>
          <TouchableOpacity style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}} />
          </TouchableOpacity>
          <Text style={[styles.infoText, {color: colorTable[txType], fontWeight: '500'}]}>{infoText} </Text>
          <Text style={styles.infoText}>{infoText2}</Text>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.headerText}>Movimentações recentes</Text>

        <View style={styles.summaryList}>
          {this.renderItems()}
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
  headerText: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: $fontColor
  },
  summaryList: {
    justifyContent: 'space-between',
  },
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarContainer: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:24,
    height:24,
    borderRadius:12,
    marginRight: 16,
  },
  avatar: {
    width:24,
    height:24,
    borderRadius:12,
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
});

export default HistoryCard;
