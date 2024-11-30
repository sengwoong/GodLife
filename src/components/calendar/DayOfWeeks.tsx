import React from 'react';
import {Dimensions, StyleSheet, Text, TextStyle, View} from 'react-native';
import { colors, getFontStyle } from '../../constants/index';  

const deviceWidth = Dimensions.get('window').width;

function DayOfWeeks() {
  const styles = styling();

  return (
    <View style={styles.container}>
      {['일', '월', '화', '수', '목', '금', '토'].map((dayOfWeek, i) => {
        return (
          <View key={i} style={styles.item}>
            <Text
              style={[
                styles.text,
                dayOfWeek === '토' && styles.saturdayText,
                dayOfWeek === '일' && styles.sundayText,
              ]}>
              {dayOfWeek}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styling = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    item: {
      width: deviceWidth / 7,
      alignItems: 'center',
    },
    text: {
      ... getFontStyle('body', 'medium', 'medium'),
      color: colors.BLACK,
    } as TextStyle,
    saturdayText: {
      color: colors.BLUE,
    },
    sundayText: {
      color: colors.RED,
    },
  });

export default DayOfWeeks;
