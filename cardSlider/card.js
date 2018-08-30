
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import constants from './constants';

const { $bgColor, $shadowColor } = constants;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: $bgColor,
    shadowColor: $shadowColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    padding: 24
  }
});

export default Card;
