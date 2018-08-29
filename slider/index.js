import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Card from './card';
import BalanceCard from './balanceCard';
import constants from './constants';

const { $fontColor } = constants;
const { width: viewportWidth } = Dimensions.get('window');
const sliderWidth = viewportWidth;
const itemWidth = viewportWidth;
const SLIDER_FIRST_ITEM = 0;

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderActiveSlide: SLIDER_FIRST_ITEM
    };
  }
  _renderItem({ item: {type, data} }) {
    return (
      <View style={styles.sliderItem}>
        <Card>
          {
            (type === 'balance' && <BalanceCard data={data}></BalanceCard>) ||
            (type === 'history' && <BalanceCard data={data}></BalanceCard>) ||
            (type === 'change' && <BalanceCard data={data}></BalanceCard>)
          }
        </Card>
      </View>
    );
  }

  render() {
    const { sliderActiveSlide } = this.state;
    return (
      <View>
        <Carousel
          ref={c => this._slider1Ref = c}
          data={this.props.sliderItems}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          firstItem={SLIDER_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          contentContainerCustomStyle={styles.sliderContentContainer}
          onSnapToItem={(index) => this.setState({ sliderActiveSlide: index }) }
        />
        <Pagination
          dotsLength={this.props.sliderItems.length}
          activeDotIndex={sliderActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={$fontColor}
          dotStyle={styles.paginationDot}
          inactiveDotColor={$fontColor}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.9}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderItem: {
    flex: 1,
    paddingHorizontal: 16,
  },
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 0
  },
  sliderContentContainer: {
    paddingVertical: 15,
  }
});

export default Slider;
