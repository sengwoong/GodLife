import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

import { colors, numbers } from '../../constants/index';
import CustomButton from '../CustomButton';

interface YearSelectorProps {
  isVisible: boolean;
  currentyear: number;
  onChangeYear: (year: number) => void;
  hide: () => void;
}

function YearSelector({
  isVisible,
  currentyear,
  onChangeYear,
  hide,
}: YearSelectorProps) {
  const [data, setData] = useState<{ id: number; num: number; }[]>([]);
  const flatListRef = useRef<FlatList | null>(null);

  useEffect(() => {
    const yearIndex = currentyear - numbers.MIN_CALENDAR_YEAR - 4;
    const currentRow = Math.floor(
      yearIndex / numbers.CALENDAR_YEAR_SELECTOR_COLUMN,
    );
    const scrollToY = currentRow * 50;

    if (isVisible) {
      flatListRef.current?.scrollToOffset({offset: scrollToY, animated: true});
    }
  }, [isVisible, currentyear]);

  useEffect(() => {
    const years = Array.from(
      {
        length: numbers.MAX_CALENDAR_YEAR - numbers.MIN_CALENDAR_YEAR + 1,
      },
      (_, index) => ({
        id: index,
        num: index + numbers.MIN_CALENDAR_YEAR,
      }),
    );
    setData(years);
  }, []);

  const styles = styling();

  return (
    <>
      {isVisible && (
        <View style={styles.container}>
          <View style={styles.yearsContainer}>
            <FlatList
              ref={flatListRef}
              style={styles.scrollContainer}
              showsVerticalScrollIndicator={false}
              initialNumToRender={20}
              data={data}
              renderItem={({item}) => (
                <Pressable
                  key={item.num}
                  onPress={() => onChangeYear(item.num)}
                  style={[
                    styles.yearButton,
                    currentyear === item.num && styles.currentYearButton,
                  ]}>
                  <Text
                    style={[
                      styles.yearText,
                      currentyear === item.num && styles.currentYearText,
                    ]}>
                    {item.num}
                  </Text>
                </Pressable>
              )}
              keyExtractor={item => String(item.num)}
              numColumns={numbers.CALENDAR_YEAR_SELECTOR_COLUMN}
            />
          </View>
          <Pressable style={styles.closeButton} >
            <CustomButton color='BLACK' label ='취소' onPress={hide}/>
          </Pressable>
        </View>
      )}
    </>
  );
}

const styling = () =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      width: '100%',
    },
    yearsContainer: {
      alignItems: 'center',
      backgroundColor: colors.WHITE,
    },
    scrollContainer: {
      maxHeight: 200,
      backgroundColor: colors.WHITE,
    },
    yearButton: {
      width: 80,
      height: 40,
      padding: 10,
      margin: 5,
      borderWidth: 1,
      borderColor: colors.GRAY,
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    currentYearButton: {
      backgroundColor: colors.RED,
      borderColor: colors.RED,
    },
    yearText: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.GRAY,
    },
    currentYearText: {
      color: colors.WHITE,
      fontWeight: '600',
    },
    closeButton: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: colors.WHITE,
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: colors.GRAY,
    },

  });

export default YearSelector;
