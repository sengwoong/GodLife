import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, TextStyle, View} from 'react-native';
import { colors, getFontStyle } from '../../constants/index';  

const BASE_DATE_SIZE = 28;
const SELECTED_DATE_INCREMENT = 10;

interface DateBoxProps {
  date: number;
  isToday: boolean;
  hasSchedule: boolean;
  selectedDate: number;
  onPressDate: (date: number) => void;
}

const deviceWidth = Dimensions.get('window').width;

function DateBox({
  date,
  isToday,
  hasSchedule,  
  selectedDate, 
  onPressDate,
}: DateBoxProps) {

  const styles = styling();

  return (
    <Pressable style={styles.container} onPress={() => onPressDate(date)}>
      {date > 0 && (
        <>
          <View
            style={[
              styles.dateContainer,
              selectedDate === date && styles.selectedContainer,
              selectedDate === date && isToday && styles.selectedTodayContainer,
            ]}>
            <Text
              style={[
                styles.dateText,
                isToday && styles.todayText,
                selectedDate === date && styles.selectedDateText,
                selectedDate === date && isToday && styles.selectedTodayText,
              ]}>
              {date}
            </Text>
          </View>
          {hasSchedule && <View style={styles.scheduleIndicator} />}
        </>
      )}
    </Pressable>
  );
}

const styling = () =>
  StyleSheet.create({
    container: {
      width: deviceWidth / 7,
      height: deviceWidth / 7,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: colors.GRAY,
      alignItems: 'center',
    },

    dateContainer: {
      marginTop: 5,
      alignItems: 'center',
      justifyContent: 'center',
      width: BASE_DATE_SIZE,
      height: BASE_DATE_SIZE,
      borderRadius: BASE_DATE_SIZE / 2,
    },

    selectedContainer: {
      width: BASE_DATE_SIZE + SELECTED_DATE_INCREMENT,
      height: BASE_DATE_SIZE + SELECTED_DATE_INCREMENT,
      borderRadius: (BASE_DATE_SIZE + SELECTED_DATE_INCREMENT) / 2,
      backgroundColor: colors.LIGHT_GREEN,
    },

    selectedTodayContainer: {
      backgroundColor: colors.LIGHT_RED,
    },

    dateText: {
      ... getFontStyle('titleBody', 'small', 'medium'),
    } as TextStyle,

    todayText: {
      color: colors.RED,
      fontWeight: 'bold',
    },

    selectedDateText: {
      color: colors.GREEN,
      fontWeight: 'bold',
    },

    selectedTodayText: {
      color: colors.RED, 
    },

    scheduleIndicator: {
      marginTop: 2,
      width: 6,
      height: 6,
      borderRadius: 6,
      backgroundColor: colors.RED,
    },
  });

export default DateBox;
