
import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, NativeSyntheticEvent, NativeScrollEvent, Text } from 'react-native';
import { colors } from '../constants/index'; 
const { width } = Dimensions.get('window');

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({
      x: currentIndex * width,
      animated: true,
    });
  }, [currentIndex]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View >
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
      > 
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image}  />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: 200,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.GREEN,
    width: 30
  },
  inactiveDot: {
    backgroundColor:colors.GRAY,
  },
});

export default ImageSlider;
